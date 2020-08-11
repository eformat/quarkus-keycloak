import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule, AuthConfig } from 'angular-oauth2-oidc';

import { AuthConfigService } from './authconfig.service';
import { authConfig, OAuthModuleConfig } from './auth.config';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

export function init_app(authConfigService: AuthConfigService) {
  return () => authConfigService.initAuth();
}

@NgModule({
  imports: [HttpClientModule, OAuthModule.forRoot()],
  providers: [
    AuthConfigService,
    { provide: AuthConfig, useValue: authConfig },
    OAuthModuleConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AuthConfigService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AuthConfigModule {}

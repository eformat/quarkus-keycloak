import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { PublicComponent } from './public/public.component';
import { AuthConfigModule } from './auth.config.module';

@NgModule({
  declarations: [
    PublicComponent,
    UserComponent,
    AdminComponent,
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AuthConfigModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

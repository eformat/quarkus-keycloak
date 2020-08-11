import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private oauthService: OAuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!this.oauthService.hasValidAccessToken()) {
        this.router.navigate(['']);
        return reject(false);
      } else {
        var base64Url = this.oauthService.getAccessToken().split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(
          atob(base64)
            .split('')
            .map(function(c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
        );
        //console.log('jsonToken: ', JSON.parse(jsonPayload));
        const token = JSON.parse(jsonPayload);

        const requiredRoles: string[] = route.data.roles;
        if (!requiredRoles || requiredRoles.length === 0) {
          return resolve(true);
        } else {
          if (!token || token.resource_access === 0) {
            resolve(false);
          }
          //const realm = token.azp;
          //const roles = token.resource_access[realm].roles;
          const roles = token.realm_access.roles;
          //console.log('realm: ', realm);
          //console.log('roles: ', roles);
          resolve(requiredRoles.every(role => roles.indexOf(role) > -1));
        }
      }
    });
  }
}

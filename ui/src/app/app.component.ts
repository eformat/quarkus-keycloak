import { Component, OnInit } from '@angular/core';

import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ui';
  
  constructor(private readonly oauthService: OAuthService) {}

  ngOnInit() {}

  logout() {
    this.oauthService.logOut();
  }
}

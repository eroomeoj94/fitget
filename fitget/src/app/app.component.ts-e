import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fitget';

  constructor(private oauthService: OAuthService) {
    this.oauthService.loginUrl = 'https://www.fitbit.com/oauth2/authorize';

    this.oauthService.redirectUri = window.location.origin + "/home";
    
    this.oauthService.scope = "activity heartrate location nutrition profile settings sleep social weight";

    this.oauthService.clientId = "228GFZ";
    
    this.oauthService.oidc = false;

    this.oauthService.setStorage(sessionStorage);

    this.oauthService.tryLogin({});
  }

}

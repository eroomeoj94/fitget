import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fitget';

  constructor(private oauthService: OAuthService){
    //TODO: Implement OAuthService for the fitbit API
  }
}

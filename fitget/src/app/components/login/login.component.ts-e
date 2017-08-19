import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private oAuthService: OAuthService, private router:Router) { }

  ngOnInit() {
  }

  login(){
    window.location.href = ('https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=228GFZ&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fhome&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800')
  }

   public get name() {
        let claims = this.oAuthService.getIdentityClaims();
        if (!claims) return null;
        return claims.given_name; 
    }


}

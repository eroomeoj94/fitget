import { FitbitService } from './services/fitbit.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    OAuthModule.forRoot(),
    RouterModule.forRoot([{
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'home',
      component: HomeComponent
    }, {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }
    ])
  ],
  providers: [FitbitService],
  bootstrap: [AppComponent]
})
export class AppModule { }

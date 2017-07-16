import { FitbitService } from './../services/fitbit.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  accessToken: string;
  userId: string;
  result: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fitbitService: FitbitService) { }

  ngOnInit() {
    let routeFragment = this.activatedRoute.fragment.map(fragment => fragment);

    routeFragment.subscribe(fragment => {
      let tokenString = fragment.match(/^(.*?)&/);
      if (tokenString) {
        this.accessToken = tokenString[1].replace('access_token=', '');
        localStorage.setItem('accessToken',this.accessToken);
      }
      let userIdString = fragment.match(/id=(.*?)&/);
      if(userIdString){
          this.userId = userIdString[1].replace('user_id=','');
        localStorage.setItem('userId',this.userId);
      }
    });
  }

  getActivities() {
    this.fitbitService.getActivities(this.userId, this.accessToken).subscribe(activities => {
      this.result = activities
    });
  }
}

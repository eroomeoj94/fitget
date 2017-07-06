import { FitbitService } from './../services/fitbit.service';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  code:string;

  constructor(private activatedRoute: ActivatedRoute,private fitbitService:FitbitService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        this.code = params['code'];
      });
  }

  getActivities(){
    var test = this.fitbitService.getActivities(this.code).subscribe();
  }

}

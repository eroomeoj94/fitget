import { Activities } from './../models/activities';
import { Injectable } from '@angular/core';
import { Http, Response ,Headers} from '@angular/http';
 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
 
@Injectable()
export class FitbitService {
  constructor (private http: Http) {}
 
  getActivities(userId:string, accessToken:string): Observable<Activities> {
    let headers: Headers = new Headers();
    headers.append('Authorization', 'Bearer ' + accessToken)
    
    return this.http.get('https://api.fitbit.com/1/user/'+userId+'/activities.json',{headers:headers})
                    .map(data => data.json() as Activities)
                    .catch(this.handleError);
  }
 
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

import {GlobalProvider} from '../global/global';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: Http, public constants: GlobalProvider) {
    console.log('Hello UserProvider Provider');
  }

  createHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json');
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('userData')).auth_token); 
    headers.append('Content-Type', 'application/json');
  }

  addUser(body:Object):Observable<any[]>{
  	console.log(body);
  	//let bodyString = JSON.stringify(body); // Stringify payload
    //let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    //let options       = new RequestOptions({ headers: headers }); 

    let headers = new Headers();
    this.createHeader(headers);

    return this.http.post(this.constants.getHost() + 'users', JSON.stringify(body), { headers }) // using post rquest
		.map(this.extractData)
		.catch((e) => {
	        console.log(e.json());
	        return Observable.throw(e.json().status || e.json().errors || 'Server error');
	      }); 
  }

  /* handle response */
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    console.error(error.message);
    console.log(error.toString());
    return Observable.throw(errMsg);
  }

}

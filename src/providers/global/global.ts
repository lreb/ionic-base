import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GlobalProvider {
  // private readonly host: string = "http://13.85.30.38/";
  private readonly host: string = "http://localhost:3000/";
  constructor(public http: Http) {
    console.log('Hello GlobalProvider Provider');
  }
  
  public getHost(version = "v1") {
    switch (version) {
      case "v1":{
        return this.host + version + "/";
      }
      default: {
        return this.host + version + "/";
      }
    }
  }
}

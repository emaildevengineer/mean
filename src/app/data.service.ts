import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
//import '.rxjs-operators.ts';
//import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";
//import 'rxjs/add/operator/toPromise';


@Injectable()
export class DataService {

  result:any;

  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get("/api/users").pipe(
      map(result => this.result = result.json().data));
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
@Injectable()
export class ServiceproviderProvider {

  baseUrl:string;
  constructor(public http: HttpClient) {
    console.log('Hello ServiceproviderProvider Provider');
    this.baseUrl="";
    this.getPost();
  }
  getPost(){
   return this.http.get("https://www.reddit.com/r/sports/top.json?limit=30");
  }
 
}

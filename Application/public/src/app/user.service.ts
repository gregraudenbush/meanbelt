import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs";
@Injectable()
export class UserService {

  constructor(public _http: Http) { 

  }
  user = null
  loginUser(user){
    this.user = user
    console.log(user.name + " is in service.ts")
    return this._http.post('/login', user)
      .map( data => data.json() )
      .toPromise()     
  }
    newQ(question){
    
    console.log(question.text + " is a question in service.ts" + question.user )
    return this._http.post('/newQ', question)
      .map( data => data.json() )
      .toPromise()     
  }
    findQ(){
    console.log("USER SERVICE METHOD findQ"); 
     return this._http.get('/index')
     .map(data=>data.json())
     .toPromise()
     
  }
     OneQ(id){
    console.log("USER SERVICE METHOD OneQ"); 
     return this._http.get('/OneQ', id)
     .map(data=>data.json())
     .toPromise()
     
  }
  

}

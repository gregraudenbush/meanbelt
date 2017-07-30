import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs";
@Injectable()
export class UserService {

  constructor(public _http: Http) { 

  }
  user = ""
  loginUser(user){
    this.user = user
    console.log(user.name + " is in service.ts")
    return this._http.post('/login', user)
      .map( data => data.json() )
      .toPromise()     
  }
    newPoll(poll){
    
    console.log(poll.text + " is a question in service.ts" + poll.user )
    return this._http.post('/newPoll', poll)
      .map( data => data.json() )
      .toPromise()     
  }
    findPoll(){
    console.log("service findpoll"); 
     return this._http.get('/index')
     .map(data=>data.json())
     .toPromise()
     
  }
     OnePoll(id){
     console.log("USER SERVICE METHOD OneQ" + id.id); 
     return this._http.get('/OnePoll/' + id.id)
     .map(data=>data.json())
     .toPromise()
     
  }
    vote1(id){
      
     console.log("vote 1 " + id.id); 
     return this._http.post('/vote1', id)
     .map(data=>data.json())
     .toPromise()
    }
    vote2(id){
      
     console.log("vote 2 " + id.id); 
     return this._http.post('/vote2', id)
     .map(data=>data.json())
     .toPromise()
    }
    vote3(id){
      
     console.log("vote 3 " + id.id); 
     return this._http.post('/vote3', id)
     .map(data=>data.json())
     .toPromise()
    }
    vote4(id){
      
     console.log("vote 4 " + id.id); 
     return this._http.post('/vote4', id)
     .map(data=>data.json())
     .toPromise()
    }
    
  delete(data){
    return this._http.post("/delete",data)
    .map( data => data.json() )
    .toPromise();
  };
  

}

import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { AppRoutingModule } from '.././routing.module'; 
import { Router } from "@angular/router"
@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  constructor(public _userService: UserService, public _router: Router) { }
  // user = this._userService.user
  ngOnInit() {
    this.findPoll()
  }
  polls = []
  user = {
    name: this._userService.user.name
  }
  search1 = {
    poll: "",
  };
  findPoll(){
    this._userService.findPoll()
    .then( question => { this.polls = question })
    .catch( err => { console.log("error"); + "get" })
  }
  delete(val){
    this._userService.delete({
      id: val
    })
    .then( data => {
      console.log("Data from login function: ")
      console.log(data.status)

      if(!data.status){
       console.log(data.message)
      } else {
        this.ngOnInit()
      }

     } )
    .catch( err => {
      console.log("on .CATCH vote ")
      console.log(err);
    })
  }
  search(){
    console.log(this.polls);
    var results = [];
        for (let x = 0; x < this.polls.length; x++) {
            if(this.polls[x].text.indexOf(this.search1.poll) != -1){
              results.push(this.polls[x])
            }
        }
        console.log(results)
        this.polls = results;
        this.search1 = {
    poll: "",
  };
  }
}

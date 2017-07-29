import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { AppRoutingModule } from '.././routing.module'; 
import { Router } from "@angular/router"

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(public _userService: UserService, public _router: Router) { }
  user = this._userService.user
  poll = {
    text: null,
    option: { 
      opt1: null,
      opt2: null,
      opt3: null,
      opt4: null
    },
    vote: { 
      opt1: 0,
      opt2: 0,
      opt3: 0,
      opt4: 0
    },
    user: this._userService.user.name
  }
  message = ""
  ngOnInit() {
  }
  newQ(){
    console.log("newq button working")
    console.log(this.poll.text,this.poll.user)
    this._userService.newPoll(this.poll)
    .then((qback)=> { 
      if(!qback.error){
        console.log(qback);
        this._router.navigate(["wall"])
      }else{
        console.log(qback.message)
        this.message = qback.message 
      }
    })  
    this._router.navigate(["wall"])
  }
  cancel(){
    console.log("cancel button working")
    this._router.navigate(["wall"])
  }
}

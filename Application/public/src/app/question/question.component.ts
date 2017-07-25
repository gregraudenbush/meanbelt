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
  question = {
    text: null,
    desc: null,
    user: this.user.name
  }
  message = ""
  ngOnInit() {
  }
  newQ(){
    console.log("newq button working")
    console.log(this.question.text,this.question.user)
    this._userService.newQ(this.question)
    .then((qback)=> { 
      if(!qback.error){
        console.log(qback);
        this._router.navigate(["wall"])
      }else{
        console.log(qback.message)
        this.message = qback.message 
      }
    })  
  }
  cancel(){
    console.log("cancel button working")
    this.question = {
    text: null,
    desc: null,
    user: this.user.name
  }
  }
}

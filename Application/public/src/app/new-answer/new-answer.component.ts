import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { AppRoutingModule } from '.././routing.module'; 
import { Router } from "@angular/router"
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-new-answer',
  templateUrl: './new-answer.component.html',
  styleUrls: ['./new-answer.component.css']
})
export class NewAnswerComponent implements OnInit {
 id = null
 sub = null
  constructor(public _userService: UserService, public _router: Router, private _route: ActivatedRoute) { 
    this._route.params.subscribe((param)=>{
      console.log("TaskDetailsComponent loaded and url id given is: ", param.id);
      this.id = param.id
      this.OneQ(param.id)
    })
  }
  quest = null
    OneQ(id){
    console.log(id)
    this._userService.OneQ(id)

    .then( question => { this.quest = question })
    
    .catch( err => { console.log("error"); + "get" })
  }
  user = this._userService.user
  answer = {
    text: null,
    desc: null,
    user: this.user
  }
  message = ""
  newA(){
    console.log("newq button working")
    console.log(this.answer.text,this.answer.user)
    this._userService.newQ(this.question)
    .then((aback)=> { 
      if(!aback.error){
        console.log(aback);
        this._router.navigate(["wall"])
      }else{
        console.log(aback.message)
        this.message = aback.message 
      }
    })  
  }
  cancel(){
    console.log("cancel button working")
    this.answer = {
    text: null,
    desc: null,
    user: this.user
  }
  }
  ngOnInit() {
  }

}

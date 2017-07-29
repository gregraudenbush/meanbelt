
import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { AppRoutingModule } from '.././routing.module'; 
import { Router } from "@angular/router"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questshow',
  templateUrl: './questshow.component.html',
  styleUrls: ['./questshow.component.css']
})
export class QuestshowComponent implements OnInit {

  constructor(public _userService: UserService, public _router: Router, private _route: ActivatedRoute) { 
    this._route.params.subscribe((param)=>{
      console.log("TaskDetailsComponent loaded and url id given is: ", param.id);
      this.pollsearch.id = param.id
      this.OnePoll()
    })
  }
  pollsearch = {
    id: ""
  }
  sub = null
  ngOnInit() {
    // this.sub = this._route.params.subscribe(params => {
    // this.id = +params['id']
    // });
    
    
  }
 poll ={poll: {
    text: "",
    option: { 
      opt1: "",
      opt2: "",
      opt3: "",
      opt4: ""
    },
    vote: { 
      opt1: 0,
      opt2: 0,
      opt3: 0,
      opt4: 0
    },
    user: ""
    }
  }

  // poll = ""
  
  OnePoll(){
    console.log("one poll questshow " + this.pollsearch.id)
    this._userService.OnePoll(this.pollsearch)
    .then( onepoll => { this.poll = onepoll })
    .catch( err => { console.log("error"); + "get" })
    
  }
  vote1(){
    console.log("vote 1 working " + this.pollsearch.id)
    this._userService.vote1(this.pollsearch)
    .then( data => { 
      console.log(data.message)
      console.log("back from vote1")
     })
    .catch( err => { console.log("error"); + "get" })
    this.OnePoll()

  }
  // vote(val){
  //   this._userService.optionVote({
  //     voted_option: val,
  //     id:this.pollsearch.id
  //   })
  //   .then( data => {
  //     console.log("back from vote:" + this.pollsearch.id)
  //     console.log(data.status)

  //     if(!data.status){
  //      console.log(data.message)
  //     } else {
  //       this.ngOnInit()
  //     }

  //    } )
  //   .catch( err => {
  //     console.log("on .CATCH vote ")
  //     console.log(err);
  //   })
  // }
vote2(){
    this._userService.vote2(this.pollsearch)
    .then( data => { 
      console.log(data.message)
      console.log("back from vote2")
     })
    .catch( err => { console.log("error"); + "get" })
     this.OnePoll()
  }
  vote3(){
    this._userService.vote3(this.pollsearch)
    .then( data => { 
      console.log(data.message)
      console.log("back from vote3")
     })
    .catch( err => { console.log("error"); + "get" })
     this.OnePoll()
  }
  vote4(){
    this._userService.vote4(this.pollsearch)
    .then( data => { 
      console.log(data.message)
      console.log("back from vote4")
     })
    .catch( err => { console.log("error"); + "get" })
     this.OnePoll()
  }
}
// this.poll = onepoll
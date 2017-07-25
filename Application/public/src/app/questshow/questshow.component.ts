
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
      this.id = param.id
      
    })
  }
  id = null
  sub = null
  ngOnInit() {
    // this.sub = this._route.params.subscribe(params => {
    // this.id = +params['id']
    // });
    this.OneQ(this.id)
    
  }
  quest = null
  
  OneQ(id){
    console.log(id)
    this._userService.OneQ(id)

    .then( question => { this.quest = question })
    
    .catch( err => { console.log("error"); + "get" })
  }

}

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
  user = this._userService.user
  ngOnInit() {
    this.findQ()
  }
  questions = []
  findQ(){
    this._userService.findQ()
    .then( question => { this.questions = question })
    .catch( err => { console.log("error"); + "get" })
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { AppRoutingModule } from '.././routing.module'; 
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _userService: UserService, public _router: Router) { }
  user = {name: null
        }
  message = ""
  login(){
    console.log(this.user.name)
    this._userService.loginUser(this.user)
    this._router.navigate(["wall"])
    
  }



  ngOnInit() {
  }

}

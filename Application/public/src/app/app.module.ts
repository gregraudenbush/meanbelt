import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {UserService} from "./user.service";
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './routing.module';
import { LoginComponent } from './login/login.component';
import { WallComponent } from './wall/wall.component';
import { QuestionComponent } from './question/question.component';

import { QuestshowComponent } from './questshow/questshow.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WallComponent,
    QuestionComponent,
    QuestshowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

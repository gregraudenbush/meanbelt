import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WallComponent } from './wall/wall.component';
import { QuestionComponent } from './question/question.component';
import { NewAnswerComponent } from './new-answer/new-answer.component';
import { QuestshowComponent } from './questshow/questshow.component';

import {UserService} from "./user.service";
const routes: Routes = [
  {path: "", pathMatch: 'full', component: LoginComponent},
  {path: "wall", component: WallComponent},
  {path: "add", component: QuestionComponent},
  {path: ":id/newanswer", component: NewAnswerComponent},
  {path: ":id/show", component: QuestshowComponent},
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

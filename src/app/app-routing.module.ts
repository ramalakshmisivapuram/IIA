import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { NewnavComponent } from './newnav/newnav.component';


import {HomeComponent} from './home/home.component';

import { LoactionComponent } from './loaction/loaction.component';
import { AuthGuard } from 'src/authguard';
import { Course1Component } from './course1/course1.component';
import { Course2Component } from './course2/course2.component';
import { Course3Component } from './course3/course3.component';
import { MainComponent } from './main/main.component';
import { AlertComponent } from './alert/alert.component';



const routes: Routes = [
  {path:'',component:NewnavComponent},
  {path:'newnav',component:NewnavComponent},
  {path:'navbar',component:NavbarComponent},
  { path: '', component: HomeComponent  ,canActivate: [AuthGuard]},
  { path: '',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'main',component:MainComponent},
  {path:'register',component:RegisterComponent},


  {path:'newnav',component:NewnavComponent},
  {path:'location',component:LoactionComponent},
  {path:'course1',component:Course1Component},
  {path:'course2',component:Course2Component},
  {path:'course3',component:Course3Component},
  {path:'alert',component:AlertComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {NewsPageComponent} from "./news-page/news-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {ProfilePageComponent} from "./profile-page/profile-page.component";


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'news', component: NewsPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'profile', component: ProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

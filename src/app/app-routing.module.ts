import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {NewsPageComponent} from "./news-page/news-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {AuthGuard} from "./shared/services/auth.guards";


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'news', component: NewsPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'profile', loadChildren: './profile-page/profile-page.module#ProfilePageModule', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

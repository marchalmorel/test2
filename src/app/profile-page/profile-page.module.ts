import {NgModule} from "@angular/core";
import {ProfilePageComponent} from "./profile-page.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ProfilePageComponent}
    ])
  ],
  exports: [RouterModule]
})

export class ProfilePageModule {

}

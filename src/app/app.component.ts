import {Component, OnInit} from '@angular/core';
import {AuthService} from "./shared/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  navBarOpen = false;
  isAuth = false;

  constructor(
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.auth.isAuthenticated$.subscribe(value  => {
      this.isAuth = value;
    })
  }


  toggleNavBar(): void {
    this.navBarOpen = !this.navBarOpen;
  }
}

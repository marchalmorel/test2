import {Component, OnInit} from '@angular/core';
import {AuthService} from "./shared/services/auth.service";
import {SpinnerService} from "./shared/services/spinner.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  navBarOpen = false;
  isAuth = false;
  spinnerStatus = false;

  constructor(
    private auth: AuthService,
    private spinner: SpinnerService
  ) {}

  ngOnInit() {
    this.auth.isAuthenticated$.subscribe(value  => {
      this.isAuth = value;
    });

    this.spinner.getSpinner().subscribe(value => {
      this.spinnerStatus = value;
    })
  }


  toggleNavBar(): void {
    this.navBarOpen = !this.navBarOpen;
  }
}

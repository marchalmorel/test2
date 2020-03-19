import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  spinner = new BehaviorSubject(false);

   spinnerStart(): void {
     this.spinner.next(true)
   }

   spinnerEnd(): void {
     this.spinner.next(false)
  }

  getSpinner(): Observable<boolean> {
     return this.spinner.asObservable()
  }
}


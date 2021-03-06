import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, finalize, timeout} from "rxjs/operators";
import {SpinnerService} from "./spinner.service";

@Injectable({
  providedIn: 'root'
})
export class httpWrapperService {
  constructor(
    private http: HttpClient,
    private spinner: SpinnerService
  ) {}

  httpWrapper(obs: Observable<any>): Observable<any> {
    this.spinner.spinnerStart();

    return obs.pipe(
      catchError(err => {
        this.proceedError(err);
        return throwError(err);
      }),
      timeout(10000),
      finalize(() => {
        this.spinner.spinnerEnd();
      })
    )
  }

  proceedError(err: Error) {}
}

import {Injectable} from "@angular/core";
import {httpWrapperService} from "./httpWrapper.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(
    private httpWrapperService: httpWrapperService,
    private http: HttpClient
  ) {}

  getNews(): Observable<any> {
    return this.httpWrapperService.httpWrapper(
      this.http.get(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-19&sortBy=publishedAt&apiKey=${environment.newsApiKey}`)
    )
  }
}

import { Component, OnInit } from '@angular/core';
import {NewsService} from "../shared/services/news.service";
import {Article} from "../shared/interfaces";

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  articles: Article[] = [];
  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.newsService.getNews().subscribe(response => {
      this.articles = response.articles;
    })
  }

}

import { Component, OnInit } from '@angular/core';

import { ArticleSearchService } from '../../shared/services/article-search.service';
import { Article } from '../../shared/models/article';

@Component({
  selector: 'ig-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles: Array<Article>;

  constructor(private articleSearchService: ArticleSearchService) { }

  ngOnInit() {
    this.articleSearchService.articleList$.subscribe(articles => {
      this.articles = articles;
    });
  }

}

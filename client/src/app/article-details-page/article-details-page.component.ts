import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ArticleSearchService } from '../shared/services/article-search.service';
import { Article } from '../shared/models/article';

@Component({
  selector: 'ig-article-details-page',
  templateUrl: './article-details-page.component.html',
  styleUrls: ['./article-details-page.component.scss']
})
export class ArticleDetailsPageComponent implements OnInit {
  article: Article;

  constructor(
    private route: ActivatedRoute,
    private articleSearchService: ArticleSearchService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getArticle();
  }

  goBack(): void {
    this.location.back();
  }

  getArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleSearchService.getArticle(id).subscribe(article => this.article = article);
  }

}

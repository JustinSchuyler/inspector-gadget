import { Component, OnInit, Input } from '@angular/core';

import { Article } from '../../../shared/models/article';

@Component({
  selector: 'ig-article-summary',
  templateUrl: './article-summary.component.html',
  styleUrls: ['./article-summary.component.scss']
})
export class ArticleSummaryComponent implements OnInit {
  @Input('article') article: Article;

  constructor() { }

  ngOnInit() {
  }

}

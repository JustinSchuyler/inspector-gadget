import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

import { ArticleSearchService } from '../../shared/services/article-search.service';

@Component({
  selector: 'ig-article-search-bar',
  templateUrl: './article-search-bar.component.html',
  styleUrls: ['./article-search-bar.component.scss']
})
export class ArticleSearchBarComponent implements OnInit {
  color = 'primary';
  mode = 'search';

  constructor(private location: Location, private router: Router, private articleSearchService: ArticleSearchService) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.indexOf('article-details') !== -1) {
          this.color = 'accent';
          this.mode = 'details';
        } else {
          this.color = 'primary';
          this.mode = 'search';
        }
      }
    });
  }

  search(barInput: HTMLInputElement) {
    this.articleSearchService.addSymptom(barInput.value);
    barInput.value = '';
  }

  goBack(): void {
    this.location.back();
  }

}

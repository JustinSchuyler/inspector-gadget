import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { take } from 'rxjs/operators';

import { ArticleSearchService } from '../../shared/services/article-search.service';

@Component({
  selector: 'ig-article-filter-bar',
  templateUrl: './article-filter-bar.component.html',
  styleUrls: ['./article-filter-bar.component.scss']
})
export class ArticleFilterBarComponent implements OnInit {
  categories: Array<string>;
  verified: Array<string>;
  filters: FormGroup;

  constructor(private fb: FormBuilder, private articleSearchService: ArticleSearchService) { }

  ngOnInit() {
    this.categories = [
      'abc',
      'def',
      'xyz'
    ];

    this.verified = [
      'Verified',
      'Unverified',
      'Show All'
    ];

    this.filters = this.fb.group({
      categoryControl: '',
      startDateControl: '',
      endDateControl: '',
      verifiedControl: ''
    });

    this.filters.valueChanges.subscribe(terms => {
      this.articleSearchService.addFilters(terms);
    });

    this.articleSearchService.filterTerms$.pipe(take(1)).subscribe(filters => {
      if (filters) {
        this.filters.patchValue(filters, { emitEvent: false });
      }
    });
  }
}

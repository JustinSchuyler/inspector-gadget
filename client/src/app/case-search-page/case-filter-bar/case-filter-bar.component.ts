import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { take } from 'rxjs/operators';

import { CaseSearchService } from '../../shared/services/case-search.service';

@Component({
  selector: 'ig-case-filter-bar',
  templateUrl: './case-filter-bar.component.html',
  styleUrls: ['./case-filter-bar.component.scss']
})
export class CaseFilterBarComponent implements OnInit {
  categories: Array<string>;
  filters: FormGroup;

  constructor(private fb: FormBuilder, private caseSearchService: CaseSearchService) { }

  ngOnInit() {
    this.categories = [
      'abc',
      'def',
      'xyz'
    ];

    this.filters = this.fb.group({
      categoryControl: '',
      startDateControl: '',
      endDateControl: ''
    });

    this.filters.valueChanges.subscribe(terms => {
      this.caseSearchService.addFilters(terms);
    });

    this.caseSearchService.filterTerms$.pipe(take(1)).subscribe(filters => {
      if (filters) {
        this.filters.patchValue(filters, { emitEvent: false });
      }
    });
  }

}

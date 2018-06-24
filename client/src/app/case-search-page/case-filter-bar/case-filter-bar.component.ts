import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CaseSearchService } from '../case-search.service';

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
  }

}

import { Component, OnInit } from '@angular/core';

import { CaseSearchService } from '../case-search.service';
import { Case } from '../../shared/models/case';

@Component({
  selector: 'ig-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.scss']
})
export class CaseListComponent implements OnInit {
  cases: Array<Case>;

  constructor(private caseSearchService: CaseSearchService) { }

  ngOnInit() {
    this.caseSearchService.caseList$.subscribe(cases => {
      this.cases = cases;
    });
  }

}

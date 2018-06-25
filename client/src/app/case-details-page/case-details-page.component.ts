import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CaseSearchService } from '../shared/services/case-search.service';
import { Case } from '../shared/models/case';

@Component({
  selector: 'ig-case-details-page',
  templateUrl: './case-details-page.component.html',
  styleUrls: ['./case-details-page.component.scss']
})
export class CaseDetailsPageComponent implements OnInit {
  case: Case;

  constructor(
    private route: ActivatedRoute,
    private caseSearchService: CaseSearchService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCase();
  }

  goBack(): void {
    this.location.back();
  }

  getCase(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.caseSearchService.getCase(id).subscribe(caseDetail => this.case = caseDetail);
  }

}

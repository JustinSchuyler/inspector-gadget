import { Component, OnInit, Input } from '@angular/core';

import { Case } from '../../../shared/models/case';

@Component({
  selector: 'ig-case-summary',
  templateUrl: './case-summary.component.html',
  styleUrls: ['./case-summary.component.scss']
})
export class CaseSummaryComponent implements OnInit {
  @Input('case') case: Case;

  constructor() { }

  ngOnInit() {
  }

}

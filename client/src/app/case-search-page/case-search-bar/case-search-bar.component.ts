import { Component, OnInit } from '@angular/core';

import { CaseSearchService } from '../case-search.service';

@Component({
  selector: 'ig-case-search-bar',
  templateUrl: './case-search-bar.component.html',
  styleUrls: ['./case-search-bar.component.scss']
})
export class CaseSearchBarComponent implements OnInit {

  constructor(private caseSearchService: CaseSearchService) { }

  ngOnInit() {
  }

  search(barInput: HTMLInputElement) {
    this.caseSearchService.addSymptom(barInput.value);
    barInput.value = '';
  }

}

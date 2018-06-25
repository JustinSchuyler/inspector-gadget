import { Component, OnInit } from '@angular/core';

import { CaseSearchService } from '../../shared/services/case-search.service';

@Component({
  selector: 'ig-case-symptom-list',
  templateUrl: './case-symptom-list.component.html',
  styleUrls: ['./case-symptom-list.component.scss']
})
export class CaseSymptomListComponent implements OnInit {
  symptoms: Array<string>;

  constructor(private caseSearchService: CaseSearchService) { }

  ngOnInit() {
    this.caseSearchService.symptomList$.subscribe(symptoms => {
      this.symptoms = symptoms;
    });
  }

  removeSymptom(symptom: string) {
    this.caseSearchService.removeSymptom(symptom);
  }

  removeAllSymptoms() {
    this.caseSearchService.removeAllSymptoms();
  }

}

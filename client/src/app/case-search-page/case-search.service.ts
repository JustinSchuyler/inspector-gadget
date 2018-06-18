import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, take } from 'rxjs/operators';

import { Case } from '../shared/models/case';

@Injectable({
  providedIn: 'root'
})
export class CaseSearchService {
  private symptomList = new Array<string>();
  private symptomListSource = new Subject<Array<string>>();
  private caseListSource = new Subject<Array<Case>>();

  symptomList$: Observable<Array<string>>;
  caseList$: Observable<Array<Case>>;

  constructor() {
    this.symptomList$ = this.symptomListSource.asObservable();
    this.caseList$ = this.caseListSource.asObservable();

    this.symptomList$.pipe(debounceTime(1500)).subscribe(symptoms => {
      this.getCases().pipe(take(1)).subscribe(cases => {
        this.caseListSource.next(cases);
      });
    });
  }

  addSymptom(symptom: string) {
    console.log('search:', symptom);
    this.symptomList.push(symptom);
    this.symptomListSource.next(this.symptomList);
  }

  removeSymptom(symptom: string) {
    console.log('remove:', symptom);
    const match = this.symptomList.indexOf(symptom);
    if (match > -1) {
      this.symptomList.splice(match, 1);
      this.symptomListSource.next(this.symptomList);
    }
  }

  removeAllSymptoms() {
    this.symptomList = new Array<string>();
    this.symptomListSource.next(this.symptomList);
  }

  getCases(): Observable<Array<Case>> {
    console.log('xhr: get cases');
    const cases = Array.from(new Array(10), (val, index) => new Case({ title: `Knowledge Case ${index}: ${Math.random()}`}));
    return of(cases);
  }
}

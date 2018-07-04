import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, merge } from 'rxjs';
import { debounceTime, take, map } from 'rxjs/operators';

import { Case } from '../models/case';
import { CASES } from '../../mock-cases';

@Injectable({
  providedIn: 'root'
})
export class CaseSearchService {
  private symptomList = new Array<string>();
  private symptomListSource = new BehaviorSubject<Array<string>>(null);
  private filterTerms: any;
  private filterTermsSource = new BehaviorSubject<any>(null);
  private caseListSource = new BehaviorSubject<Array<Case>>(null);

  symptomList$: Observable<Array<string>>;
  filterTerms$: Observable<any>;
  caseList$: Observable<Array<Case>>;

  constructor() {
    this.symptomList$ = this.symptomListSource.asObservable();
    this.filterTerms$ = this.filterTermsSource.asObservable();
    this.caseList$ = this.caseListSource.asObservable();

    merge(
      this.symptomList$.pipe(map(symptoms => ({ symptoms, filters: this.filterTerms }))),
      this.filterTerms$.pipe(map(filters => ({ symptoms: this.symptomList, filters })))
    ).pipe(debounceTime(1500)).subscribe(searchTerms => {
      console.log('xhr terms:', searchTerms);
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
    return of(CASES);
  }

  getCase(id: number): Observable<Case> {
    console.log(`xhr: get case with id=${id}`);
    return of(CASES.find(caseDetail => caseDetail.id === id));
  }

  addFilters(terms) {
    this.filterTerms = terms;
    this.filterTermsSource.next(this.filterTerms);
  }
}

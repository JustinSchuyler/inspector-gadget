import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaseSearchService {
  private symptomList = new Array<string>();
  private symptomListSource = new Subject<Array<string>>();

  symptomList$ = this.symptomListSource.asObservable();

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
}

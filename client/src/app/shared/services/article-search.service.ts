import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, merge } from 'rxjs';
import { debounceTime, take, map } from 'rxjs/operators';

import { Article } from '../models/article';
import { ARTICLES } from '../../mock-articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleSearchService {
  private symptomList = new Array<string>();
  private symptomListSource = new BehaviorSubject<Array<string>>(null);
  private filterTerms: any;
  private filterTermsSource = new BehaviorSubject<any>(null);
  private articleListSource = new BehaviorSubject<Array<Article>>(null);

  symptomList$: Observable<Array<string>>;
  filterTerms$: Observable<any>;
  articleList$: Observable<Array<Article>>;

  constructor() {
    this.symptomList$ = this.symptomListSource.asObservable();
    this.filterTerms$ = this.filterTermsSource.asObservable();
    this.articleList$ = this.articleListSource.asObservable();

    merge(
      this.symptomList$.pipe(map(symptoms => ({ symptoms, filters: this.filterTerms }))),
      this.filterTerms$.pipe(map(filters => ({ symptoms: this.symptomList, filters })))
    ).pipe(debounceTime(1500)).subscribe(searchTerms => {
      console.log('xhr terms:', searchTerms);
      this.getArticles().pipe(take(1)).subscribe(articles => {
        this.articleListSource.next(articles);
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

  getArticles(): Observable<Array<Article>> {
    console.log('xhr: get articles');
    return of(ARTICLES);
  }

  getArticle(id: number): Observable<Article> {
    console.log(`xhr: get article with id=${id}`);
    return of(ARTICLES.find(article => article.id === id));
  }

  addFilters(terms) {
    this.filterTerms = terms;
    this.filterTermsSource.next(this.filterTerms);
  }
}

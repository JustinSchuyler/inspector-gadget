import { Component, OnInit } from '@angular/core';

import { ArticleSearchService } from '../../shared/services/article-search.service';

@Component({
  selector: 'ig-article-symptom-list',
  templateUrl: './article-symptom-list.component.html',
  styleUrls: ['./article-symptom-list.component.scss']
})
export class ArticleSymptomListComponent implements OnInit {
  symptoms: Array<string>;

  constructor(private articleSearchService: ArticleSearchService) { }

  ngOnInit() {
    this.articleSearchService.symptomList$.subscribe(symptoms => {
      this.symptoms = symptoms;
    });
  }

  removeSymptom(symptom: string) {
    this.articleSearchService.removeSymptom(symptom);
  }

  removeAllSymptoms() {
    this.articleSearchService.removeAllSymptoms();
  }

}

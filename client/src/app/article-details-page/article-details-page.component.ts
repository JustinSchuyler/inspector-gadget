import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { ArticleSearchService } from '../shared/services/article-search.service';
import { Article } from '../shared/models/article';

@Component({
  selector: 'ig-article-details-page',
  templateUrl: './article-details-page.component.html',
  styleUrls: ['./article-details-page.component.scss']
})
export class ArticleDetailsPageComponent implements OnInit {
  articleDetailForm = this.fb.group({
    category: ['', Validators.required],
    tags: this.fb.array([
      this.fb.control('')
    ]),
    title: ['', Validators.required],
    symptoms: this.fb.array([
      this.fb.control('')
    ]),
    rootCause: ['', Validators.required],
    fixDescription: ['', Validators.required],
    fixSteps: ['', Validators.required],
    diagnosisSteps: ['', Validators.required],
    ticketURLs: this.fb.array([
      this.fb.control('')
    ]),
    author: ['', Validators.required]
  });

  article: Article;

  constructor(
    private route: ActivatedRoute,
    private articleSearchService: ArticleSearchService,
    private fb: FormBuilder,
    private location: Location
  ) { }

  ngOnInit(): void {
    if (+this.route.snapshot.paramMap.get('id')) {
      this.getArticle();
      this.articleDetailForm.patchValue({

        category: this.article.category,
        title: this.article.title,
        rootCause: this.article.rootCause,
        fixDescription: this.article.fixDescription,
        fixSteps: this.article.fixSteps,
        diagnosisSteps: this.article.diagnosisSteps,
        author: this.article.author
      });
    }

  }

  goBack(): void {
    this.location.back();
  }

  getArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleSearchService.getArticle(id).subscribe(article => this.article = article);
  }

  onSubmit() {
    // updateArticleForm();
    console.warn(this.articleDetailForm.value);
  }

  updateArticleForm() {
    this.articleDetailForm.patchValue({
      category: this.article.category,
      title: this.article.title,
      rootCause: this.article.rootCause,
      fixDescription: this.article.fixDescription,
      fixSteps: this.article.fixSteps,
      diagnosisSteps: this.article.diagnosisSteps,
      author: this.article.author
    });
  }

  get tags() {
    return this.articleDetailForm.get('tags') as FormArray;
  }

  addTag() {
    this.tags.push(this.fb.control(''));
  }

  get symptoms() {
    return this.articleDetailForm.get('symptoms') as FormArray;
  }

  addSymptom() {
    this.symptoms.push(this.fb.control(''));
  }

  get ticketURLs() {
    return this.articleDetailForm.get('ticketURLs') as FormArray;
  }

  addTicketURL() {
    this.ticketURLs.push(this.fb.control(''));
  }

}

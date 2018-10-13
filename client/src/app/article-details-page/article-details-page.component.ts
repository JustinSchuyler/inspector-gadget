import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

import { ArticleSearchService } from '../shared/services/article-search.service';
import { Article } from '../shared/models/article';

@Component({
  selector: 'ig-article-details-page',
  templateUrl: './article-details-page.component.html',
  styleUrls: ['./article-details-page.component.scss']
})
export class ArticleDetailsPageComponent implements OnInit {
  articleDetailForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private articleSearchService: ArticleSearchService,
    private fb: FormBuilder,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.initializeFormGroup();
    const id = +this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.articleSearchService.getArticle(id).subscribe(this.patchFormGroup.bind(this));
    }
  }

  private initializeFormGroup(): void {
    this.articleDetailForm = this.fb.group({
      id: [''],
      category: ['', Validators.required],
      tags: this.fb.array([]),
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
  }

  private patchFormGroup(article: Article): void {
    this.articleDetailForm.patchValue({
      id: article.id,
      category: article.category,
      title: article.title,
      rootCause: article.rootCause,
      fixDescription: article.fixDescription,
      fixSteps: article.fixSteps,
      diagnosisSteps: article.diagnosisSteps,
      author: article.author
    });

    ['tags', 'symptoms', 'ticketURLs'].map(property => this.patchFormArray(article, property));
  }

  private patchFormArray(article: Article, property: string) {
    let formArray = this.articleDetailForm.get(property) as FormArray;
    let controls = article[property].map(value => new FormControl(value));

    this.clearFormArray(formArray);
    controls.map(control => formArray.push(control));
  }

  private clearFormArray(formArray: FormArray): void {
    while (formArray.length > 0) {
      formArray.removeAt(0);
    }
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    let article = this.articleDetailForm.value as Article;
    if (article.id) {
      console.log('Update:', article);
    }
    else {
      console.log('Save:', article);
    }
  }

  get tags() {
    return this.articleDetailForm.get('tags') as FormArray;
  }

  addTag(tagInput: HTMLInputElement): void {
    let tag = tagInput.value;

    if (tag) {
      this.tags.push(this.fb.control(tag));
      tagInput.value = '';
    }
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

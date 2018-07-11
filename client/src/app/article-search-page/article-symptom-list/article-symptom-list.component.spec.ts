import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSymptomListComponent } from './article-symptom-list.component';

describe('ArticleSymptomListComponent', () => {
  let component: ArticleSymptomListComponent;
  let fixture: ComponentFixture<ArticleSymptomListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSymptomListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSymptomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

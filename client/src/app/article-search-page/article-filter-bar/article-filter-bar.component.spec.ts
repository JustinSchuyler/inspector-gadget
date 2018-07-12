import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFilterBarComponent } from './article-filter-bar.component';

describe('ArticleFilterBarComponent', () => {
  let component: ArticleFilterBarComponent;
  let fixture: ComponentFixture<ArticleFilterBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleFilterBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

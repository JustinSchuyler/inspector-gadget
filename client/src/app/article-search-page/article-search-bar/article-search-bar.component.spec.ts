import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSearchBarComponent } from './article-search-bar.component';

describe('ArticleSearchBarComponent', () => {
  let component: ArticleSearchBarComponent;
  let fixture: ComponentFixture<ArticleSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

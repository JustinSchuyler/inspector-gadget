import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAdderBarComponent } from './article-adder-bar.component';

describe('ArticleAdderBarComponent', () => {
  let component: ArticleAdderBarComponent;
  let fixture: ComponentFixture<ArticleAdderBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleAdderBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleAdderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

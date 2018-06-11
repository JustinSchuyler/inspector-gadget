import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSearchPageComponent } from './case-search-page.component';

describe('CaseSearchPageComponent', () => {
  let component: CaseSearchPageComponent;
  let fixture: ComponentFixture<CaseSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSearchBarComponent } from './case-search-bar.component';

describe('CaseSearchBarComponent', () => {
  let component: CaseSearchBarComponent;
  let fixture: ComponentFixture<CaseSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

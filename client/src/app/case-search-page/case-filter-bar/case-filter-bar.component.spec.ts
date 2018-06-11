import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseFilterBarComponent } from './case-filter-bar.component';

describe('CaseFilterBarComponent', () => {
  let component: CaseFilterBarComponent;
  let fixture: ComponentFixture<CaseFilterBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseFilterBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

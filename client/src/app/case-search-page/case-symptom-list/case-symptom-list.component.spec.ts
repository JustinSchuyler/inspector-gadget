import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSymptomListComponent } from './case-symptom-list.component';

describe('CaseSymptomListComponent', () => {
  let component: CaseSymptomListComponent;
  let fixture: ComponentFixture<CaseSymptomListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseSymptomListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseSymptomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

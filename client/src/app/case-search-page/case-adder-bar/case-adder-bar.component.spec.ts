import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseAdderBarComponent } from './case-adder-bar.component';

describe('CaseAdderBarComponent', () => {
  let component: CaseAdderBarComponent;
  let fixture: ComponentFixture<CaseAdderBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseAdderBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseAdderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentValidationFormComponent } from './parent-validation-form.component';

describe('ParentValidationFormComponent', () => {
  let component: ParentValidationFormComponent;
  let fixture: ComponentFixture<ParentValidationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentValidationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentValidationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

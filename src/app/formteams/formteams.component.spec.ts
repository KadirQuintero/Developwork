import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormteamsComponent } from './formteams.component';

describe('FormteamsComponent', () => {
  let component: FormteamsComponent;
  let fixture: ComponentFixture<FormteamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormteamsComponent]
    });
    fixture = TestBed.createComponent(FormteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

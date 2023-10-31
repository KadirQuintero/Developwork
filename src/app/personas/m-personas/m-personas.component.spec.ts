import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MPersonasComponent } from './m-personas.component';

describe('MPersonasComponent', () => {
  let component: MPersonasComponent;
  let fixture: ComponentFixture<MPersonasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MPersonasComponent]
    });
    fixture = TestBed.createComponent(MPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

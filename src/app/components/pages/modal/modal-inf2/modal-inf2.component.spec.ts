import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInf2Component } from './modal-inf2.component';

describe('ModalInf2Component', () => {
  let component: ModalInf2Component;
  let fixture: ComponentFixture<ModalInf2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInf2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInf2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

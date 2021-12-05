import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInf3Component } from './modal-inf3.component';

describe('ModalInf3Component', () => {
  let component: ModalInf3Component;
  let fixture: ComponentFixture<ModalInf3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInf3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInf3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInf1Component } from './modal-inf1.component';

describe('ModalInf1Component', () => {
  let component: ModalInf1Component;
  let fixture: ComponentFixture<ModalInf1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInf1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInf1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

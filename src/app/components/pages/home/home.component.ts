import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalInf1Component } from '../modal/modal-inf1/modal-inf1.component';
import { ModalInf2Component } from '../modal/modal-inf2/modal-inf2.component';
import { ModalInf3Component } from '../modal/modal-inf3/modal-inf3.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ModalInf1Component);
  }
  openDialog2() {
    this.dialog.open(ModalInf2Component);
  }
  openDialog3() {
    this.dialog.open(ModalInf3Component);
  }

  ScrollIntoView(elem: string) {
    console.log(elem);
    document.querySelector(elem).scrollIntoView({ behavior: 'smooth', block: 'start' });
  }


}

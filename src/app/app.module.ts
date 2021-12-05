import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { ContactComponent } from './components/layouts/contact/contact.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalInf1Component } from './components/pages/modal/modal-inf1/modal-inf1.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalInf2Component } from './components/pages/modal/modal-inf2/modal-inf2.component';
import { ModalInf3Component } from './components/pages/modal/modal-inf3/modal-inf3.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ModalInf1Component,
    ModalInf2Component,
    ModalInf3Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
      Location, {
        provide: LocationStrategy,
        useClass: PathLocationStrategy
      },
      FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

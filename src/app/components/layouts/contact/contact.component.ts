import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Email } from '../../models/email.model';
import { SendEmailService } from '../../service/send-email.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sendEmail: SendEmailService
   
  ) { }


  ngOnInit(): void {
    this.createForm(new Email());
  }

  createForm(email: Email){
    this.contactForm = this.formBuilder.group({
      name: [email.name],
      telNumber: [email.telNumber],
      email: [email.email],
      subject: [email.subject],
      message: [email.message]
    })
  }

  onSubmit(){
    console.log('#######################################\n ', this.contactForm.value);
    this.sendEmail.sendContactEmail(this.contactForm.value);
    this.contactForm.reset(new Email());

  } 

}

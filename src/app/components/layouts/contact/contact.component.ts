import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Email } from '../../models/email.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  email: Email;

  constructor(
    private fb: FormBuilder
  ) { }


  createForm(email: Email){
    this.contactForm = this.fb.group({
      name: [email.name],
      telNumber: [email.telNumber],
      email: [email.email],
      subject: [email.subject],
      message: [email.message]
    })
  }

  sendEmail(){
    console.log('#######################################\n ', this.contactForm.value)
  }



 // public sendEmail(e: Event) {
 //   e.preventDefault();
  //  emailjs.sendForm('smtp_server', 'template_8uQnFG6N_clone', e.target as HTMLFormElement, 'user_XWPdjpTv0DgrQb9FN3tWr')
  //      alert("This form has been submitted.");
   //     location.href = '#';
  //      console.log(result.text);
  //    }, (error) => {
   //     console.log(error.text);
    //  });
// }

  ngOnInit(): void {
  }

}

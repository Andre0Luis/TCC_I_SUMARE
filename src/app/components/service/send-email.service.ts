import { Injectable } from '@angular/core';
import { Email } from '../models/email.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  constructor(
    private http: HttpClient
  ) { }


  sendContactEmail(email: Email): Observable<Email> {
    console.log("#########################", email);
    return this.http.post<Email>(`localhost:8080/api/tcc/sendEmail`, email);
  }
}

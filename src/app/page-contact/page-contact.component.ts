import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.css']
})
export class PageContactComponent implements OnInit {
  show = true;
  SERVER_URL = "https://ms.merch4creators.com/api/Mail";
  contactForm = new FormGroup({
    Name: new FormControl(''),
    Email: new FormControl(''),
    option: new FormControl(''),
    message: new FormControl('')
  })


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const formData = new FormData;
    var Name = this.contactForm.get('Name')?.value;
    var Email = this.contactForm.get('Email')?.value;
    var option = this.contactForm.get('option')?.value;
    var message = this.contactForm.get('message')?.value;

    var Subject = option + " :" + Name;
    var Body = "Name: " + Name + "\n" + "Email: " + Email + "\n" + "EnquiryType: " + option + "\n" + "Message:" + message;
    var raw = JSON.stringify({
      "Subject": Subject,
      "Body": Body
    });
    // console.log(raw);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      })
    };

    console.log(httpOptions);
    console.log(raw);

  
    // this.httpClient.post(this.SERVER_URL, raw, httpOptions).subscribe(
    //   (res) => console.log(res),
    //   (err) => console.log(err)
    // );
    // ('#element').toast('show')


  }


}

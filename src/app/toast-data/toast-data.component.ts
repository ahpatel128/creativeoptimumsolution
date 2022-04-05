import { Component, OnInit, TemplateRef } from '@angular/core';


@Component({
  selector: 'app-toast-data',
  templateUrl: './toast-data.component.html',
  styleUrls: ['./toast-data.component.css']
})
export class ToastDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  info = "Hello world";
  showSuccess() {
    alert("Hello world");
  }



}

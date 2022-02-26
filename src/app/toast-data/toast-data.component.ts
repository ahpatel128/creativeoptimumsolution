import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastService } from '../toast-service';


@Component({
  selector: 'app-toast-data',
  templateUrl: './toast-data.component.html',
  styleUrls: ['./toast-data.component.css']
})
export class ToastDataComponent implements OnInit {

  constructor(public toastService: ToastService) { }

  ngOnInit(): void {
  }
  info = "Hello world";
  showSuccess(info: string | TemplateRef<any>) {
    this.toastService.show(info, { classname: 'bg-success text-light', delay: 10000 });
  }



}

import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
  isActive: boolean = true;
  formBuilder: any;
  constructor() { }

  ngOnInit(): void {

  }
  changeNavigation(): void {
    if (this.isActive === true) {
      this.isActive = false;
    }
    else {
      this.isActive = true;
    }
  }
}

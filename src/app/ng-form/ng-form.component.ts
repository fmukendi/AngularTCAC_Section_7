import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-form',
  templateUrl: './ng-form.component.html',
  styleUrls: ['./ng-form.component.css']
})
export class NgFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  submit(f) {
    console.log(f);
    console.log(f.valid);
    console.log(f.value);
  }
}

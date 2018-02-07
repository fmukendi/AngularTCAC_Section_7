import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model-group',
  templateUrl: './ng-model-group.component.html',
  styleUrls: ['./ng-model-group.component.css']
})
export class NgModelGroupComponent implements OnInit {
  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'},
    {id: 3, name: 'Fax'}
  ];
  constructor() { }

  ngOnInit() {
  }
  submit(f) {
    console.log(f);
    console.log(f.valid);
    console.log(f.value);
  }

}

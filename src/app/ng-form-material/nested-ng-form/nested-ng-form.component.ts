import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';


@Component({
  selector: 'app-nested-ng-form',
  templateUrl: './nested-ng-form.component.html',
  styleUrls: ['./nested-ng-form.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class NestedNgFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

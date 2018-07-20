import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-ng-form-material',
  templateUrl: './ng-form-material.component.html',
  styleUrls: ['./ng-form-material.component.css']
})
export class NgFormMaterialComponent implements OnInit {

  name = 'Nested template driven form';
  house = {
    Address: '',
    City: '',
    County: '',
    Country: '',
    State: '',
    ZipCode: ''
  };
  btnTxt = 'Update';
  constructor() { }

  ngOnInit() {
  }

  submitForm(value, houseForm: NgForm) {
    console.log(value);
    console.log(houseForm);
    /* alert('submitting form'); */
  }

  closeModal() {
    /* alert('closing modal'); */
  }

}

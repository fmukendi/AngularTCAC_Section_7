import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-form-material',
  templateUrl: './ng-form-material.component.html',
  styleUrls: ['./ng-form-material.component.css']
})
export class NgFormMaterialComponent implements OnInit {

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

  submitForm(value, houseForm) {
    alert('submitting form');
  }

  closeModal() {
    alert('closing modal');
  }

}

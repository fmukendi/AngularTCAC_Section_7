import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'address',
  template: `
    <fieldset >
      <div>
        <label>Zip:</label>
        <input type="text" name="zip" ngModel>
      </div>
      <div>
        <label>Street:</label>
        <input type="text" name="street" ngModel>
      </div>
      <div>
        <label>City:</label>
        <input type="text" name="city" ngModel>
      </div>
    </fieldset>
  `,
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class AddressComponent  {}

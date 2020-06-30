import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Validator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private fb: FormBuilder) {}

  userprofileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      address1: [''],
      address2: [''],
      state: [''],
      zip: [''],
    })
  })

  onSubmit() {
    // console.warn(this.userprofileForm.value)
    var firstName = this.userprofileForm.controls['firstName'].value;
    var lastName = this.userprofileForm.get['lastName'].value;

    console.log("first name is" + firstName);
    console.log("last name is" + lastName);

    console.log("address one is" + this.userprofileForm.get(['address', 'address1']).value);
  }
}

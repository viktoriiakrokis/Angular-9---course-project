import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Validator } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private fb: FormBuilder) {}

  email = new FormControl('');

  userForm = new FormGroup({
    name1: new FormControl('', Validators.required),
    name2: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl('')
  })

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

  updateEmail() {
    this.email.setValue('test@testdomain.com');
  }

  onSubmit2() {
    console.log(this.userForm.value);
    console.log(this.userForm.controls['firstName'].value);
    console.log(this.userForm.get('fistName').value);
  }
}

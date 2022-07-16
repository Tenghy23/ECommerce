import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  get emailAddress(): AbstractControl {
    return this.loginForm.get('emailAddress');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
    this.createForm();
  }

  submitForm() {
    if(this.emailAddress.valid && this.password.valid){
      // call api
      // check if api value equivalent to input form
      // if yes login successful
      // else post error message
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  clearForm() {
    this.loginForm.reset();
  }

  private createForm() {
    this.loginForm = this.fb.group({
      emailAddress: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
}

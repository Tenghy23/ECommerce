import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  get username(): AbstractControl {
    return this.signup.get('username'); 
  }
 
  get password(): AbstractControl {
    return this.signup.get('password'); 
  }
  
  get emailAddress(): AbstractControl {
    return this.signup.get('emailAddress'); 
  }

  get dob(): AbstractControl {
    return this.signup.get('dob'); 
  }

  private createForm(){
    this.signup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      emailAddress: ['', Validators.required],
      dob: ['', Validators.required]
    })
  }; 

  submit() {
    if(this.signup.valid){

    } else {
      this.signup.markAllAsTouched();
    }
  }

  reset() {
    this.signup.reset();
  }
}

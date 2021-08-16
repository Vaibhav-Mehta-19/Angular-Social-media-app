import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy{
  form = new FormGroup({});
  constructor() {}
  ngOnInit(): void {
    console.log('I am auth ngOnInit()');
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }
  ngOnDestroy() {
    console.log('I am ngOnDestroy()');
  }
  onLogin() {
    if (this.form.invalid) {
      alert('Please complete the form');
      return;
    }
    console.log('I am login');
  }
  onSignup() {
    console.log('I am signup');
  }
}
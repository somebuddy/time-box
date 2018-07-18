import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'tb-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  submitError = null;

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  signin(form: NgForm) {
    const { email, password } = form.value;
    this.auth.signUpWithEmail(email, password)
      .then(() => {
        console.log('User signed in');
      })
      .catch(error => {
        console.log('User sign in error', error);
      });
  }

}

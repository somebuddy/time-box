import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'tb-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  submitError = null;

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signin(form: NgForm) {
    const { email, password } = form.value;
    this.submitError = null;
    this.auth.signInWithEmail(email, password)
      .then(user => {
        this.router.navigate(['/']);
      })
      .catch(error => {
        this.submitError = error;
        console.log('User sign in error', error);
      });
  }

}

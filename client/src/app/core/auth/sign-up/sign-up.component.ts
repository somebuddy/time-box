import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'tb-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  register(regForm: NgForm) {
    const { email, password } = regForm.value;
    this.auth.signUpWithEmail(email, password).then(() => {
      console.log('User registered');
    })
    .catch(error => {
      console.log('Registration error', error);
    });
  }

}

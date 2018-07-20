import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'tb-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  submitError = null;

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register(regForm: NgForm) {
    const { email, password } = regForm.value;
    this.submitError = null;
    this.auth.signUpWithEmail(email, password).then(() => {
      this.router.navigate(['/auth/profile']);
    })
    .catch(error => {
      this.submitError = error;
    });
  }

}

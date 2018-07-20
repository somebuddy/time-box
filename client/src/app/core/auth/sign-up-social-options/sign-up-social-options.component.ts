import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tb-sign-up-social-options',
  templateUrl: './sign-up-social-options.component.html',
  styleUrls: ['./sign-up-social-options.component.scss']
})
export class SignUpSocialOptionsComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signUpWithGoogle() {
    this.auth.signUpWithGoogle()
      .then(() => {
        this.router.navigate(['/']);
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'tb-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.scss']
})
export class UserProfileFormComponent implements OnInit {
  today;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.today = new Date();
  }

  cancel() {
    console.log('Updates canceled');
  }

  save(form: NgForm) {
    console.log('Saving updates', form);
  }
}

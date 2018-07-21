import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'tb-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.scss']
})
export class UserProfileFormComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  cancel() {
    console.log('Updates canceled');
  }

  save() {
    console.log('Saving updates');
  }
}

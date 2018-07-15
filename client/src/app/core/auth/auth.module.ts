import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserWidgetComponent } from './user-widget/user-widget.component';
import { UiModule } from '../../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    UiModule,
  ],
  declarations: [SignUpComponent, SignInComponent, UserProfileComponent, UserWidgetComponent],
})
export class AuthModule { }

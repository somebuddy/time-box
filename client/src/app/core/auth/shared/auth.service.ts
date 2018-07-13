import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserProfile } from '../models/user-profile';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<UserProfile>;

  constructor(private afAuth: AngularFireAuth, private afStore: AngularFirestore) {
    console.log('Auth service created');
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        console.log('User checked');
        if (user) {
          return afStore.doc<UserProfile>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }
}

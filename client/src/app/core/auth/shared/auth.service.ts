import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserProfile } from '../models/user-profile';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { auth } from 'firebase';

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

  signUpWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuth(provider);
  }

  signOut() {
    return this.afAuth.auth.signOut();
  }

  private oAuth(provider) {
    return this.afAuth.auth.signInWithPopup(provider).then(credentrals => {
      return this.updateUserProfile(credentrals.user);
    });
  }

  private updateUserProfile(user) {
    const userDoc = this.afStore.doc<UserProfile>(`users/${user.uid}`);
    const { uid, email, displayName, photoURL } = user;
    return userDoc.set({ uid, email, displayName, photoURL}, { merge: true });
  }
}

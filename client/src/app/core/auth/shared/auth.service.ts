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

  signUpWithEmail(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(credential => {
        this.sendVerificationEmail();
        return this.updateUserProfile(credential.user);
      });
  }

  signOut() {
    return this.afAuth.auth.signOut();
  }

  private sendVerificationEmail() {
    const user = auth().currentUser;
    auth().useDeviceLanguage();
    user.sendEmailVerification().then(() => {
      console.log('Verification email was sent');
    })
    .catch(() => {
      console.log('Error while sending verification email');
    });
  }

  private oAuth(provider) {
    return this.afAuth.auth.signInWithPopup(provider).then(credential => {
      return this.updateUserProfile(credential.user);
    });
  }

  private updateUserProfile(user) {
    const userDoc = this.afStore.doc<UserProfile>(`users/${user.uid}`);
    const { uid, email, displayName, photoURL } = user;
    return userDoc.set({ uid, email, displayName, photoURL}, { merge: true });
  }
}

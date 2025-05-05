import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // Login with email/password
  login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Register new user
  register(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Google Sign-In
  googleSignIn(): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithPopup(new GoogleAuthProvider());
  }

  // Send OTP for password reset (works for both email and phone)
  async sendPasswordResetOTP(emailOrPhone: string): Promise<{ verificationId?: string, isEmail: boolean }> {
    if (emailOrPhone.includes('@')) {
      // Email flow - send password reset email
      await this.afAuth.sendPasswordResetEmail(emailOrPhone);
      return { isEmail: true };
    } else {
      // Phone flow - send SMS OTP
      const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        size: 'invisible',
        callback: () => {}
      });
      
      const confirmationResult = await this.afAuth.signInWithPhoneNumber(
        emailOrPhone, 
        appVerifier
      );
      
      return { 
        verificationId: confirmationResult.verificationId,
        isEmail: false
      };
    }
  }

  // Verify OTP for phone number
  async verifyPhoneOTP(verificationId: string, otp: string): Promise<firebase.auth.UserCredential> {
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, otp);
    return this.afAuth.signInWithCredential(credential);
  }

  // Reset password after verification
  async resetPassword(newPassword: string): Promise<void> {
    const user = await this.afAuth.currentUser;
    if (!user) {
      throw new Error('No authenticated user found');
    }
    return user.updatePassword(newPassword);
  }

  // Standard Firebase password reset (email only)
  sendPasswordResetEmail(email: string): Promise<void> {
    return this.afAuth.sendPasswordResetEmail(email);
  }
}
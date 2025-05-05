import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  url = './assets/Screenshot_2025-04-29_223306-removebg-preview.png';
  currentView: 'welcome' | 'login' | 'signup' | 'forgot' = 'welcome';
  
  loginForm: FormGroup;
  signupForm: FormGroup;
  forgotForm: FormGroup;
  otpForm: FormGroup;
  resetPasswordForm: FormGroup;
  
  otpSent = false;
  otpVerified = false;
  isEmailFlow = false;
  verificationId?: string;
  loading = false;
  countdown = 0;
  countdownInterval: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
    
    this.forgotForm = this.fb.group({
      emailOrPhone: ['', Validators.required]
    });

    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });

    this.resetPasswordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment === 'login') {
        this.currentView = 'login';
      } else if (fragment === 'signup') {
        this.currentView = 'signup';
      }
    });
  }

  showLogin(event?: Event) {
    if (event) event.preventDefault();
    this.currentView = 'login';
    this.router.navigate([], { fragment: 'login' });
    this.resetForgotPasswordFlow();
  }

  showSignup(event?: Event) {
    if (event) event.preventDefault();
    this.currentView = 'signup';
    this.router.navigate([], { fragment: 'signup' });
    this.resetForgotPasswordFlow();
  }

  showForgotPassword(event?: Event) {
    if (event) event.preventDefault();
    this.currentView = 'forgot';
    this.resetForgotPasswordFlow();
  }

  async sendOTP() {
    if (this.forgotForm.invalid) return;

    this.loading = true;
    const { emailOrPhone } = this.forgotForm.value;

    try {
      const result = await this.authService.sendPasswordResetOTP(emailOrPhone);
      
      if (result.isEmail) {
        this.isEmailFlow = true;
        alert(`Password reset link sent to ${emailOrPhone}. Please check your email.`);
        this.otpSent = true; // Show different UI for email flow
      } else {
        this.isEmailFlow = false;
        this.verificationId = result.verificationId;
        alert(`OTP sent to ${emailOrPhone}`);
        this.startCountdown();
        this.otpSent = true;
      }
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    } finally {
      this.loading = false;
    }
  }

  startCountdown() {
    this.countdown = 60;
    this.countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(this.countdownInterval);
      }
    }, 1000);
  }

  async verifyOTP() {
    if (this.otpForm.invalid || !this.verificationId) return;

    this.loading = true;
    const { otp } = this.otpForm.value;

    try {
      await this.authService.verifyPhoneOTP(this.verificationId, otp);
      this.otpVerified = true;
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    } finally {
      this.loading = false;
    }
  }

  async resetPassword() {
    if (this.resetPasswordForm.invalid) return;

    const { newPassword, confirmNewPassword } = this.resetPasswordForm.value;
    
    if (newPassword !== confirmNewPassword) {
      alert('Passwords do not match');
      return;
    }

    this.loading = true;
    
    try {
      await this.authService.resetPassword(newPassword);
      alert('Password reset successfully! Please login with your new password.');
      this.resetForgotPasswordFlow();
      this.showLogin();
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    } finally {
      this.loading = false;
    }
  }

  resetForgotPasswordFlow() {
    this.otpSent = false;
    this.otpVerified = false;
    this.isEmailFlow = false;
    this.verificationId = undefined;
    this.forgotForm.reset();
    this.otpForm.reset();
    this.resetPasswordForm.reset();
    clearInterval(this.countdownInterval);
    this.countdown = 0;
  }

  async onLogin() {
    if (this.loginForm.invalid) return;

    this.loading = true;
    const { email, password } = this.loginForm.value;

    try {
      await this.authService.login(email, password);
      this.router.navigate(['/home']);
    } catch (error: any) {
      alert(error.message);
    } finally {
      this.loading = false;
    }
  }

  async onSignup() {
    if (this.signupForm.invalid) return;

    const { email, password, confirmPassword } = this.signupForm.value;
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    this.loading = true;
    
    try {
      await this.authService.register(email, password);
      alert('Registration successful! Please login.');
      this.currentView = 'login';
      this.router.navigate([], { fragment: 'login' });
    } catch (error: any) {
      alert(error.message);
    } finally {
      this.loading = false;
    }
  }

  async googleSignIn() {
    this.loading = true;
    try {
      await this.authService.googleSignIn();
      this.router.navigate(['/home']);
    } catch (error: any) {
      alert(error.message);
    } finally {
      this.loading = false;
    }
  }

  async sendResetLink() {
    if (this.forgotForm.invalid) return;
  
    this.loading = true;
    const { emailOrPhone } = this.forgotForm.value;
  
    try {
      await this.authService.sendPasswordResetEmail(emailOrPhone);
      alert(`Password reset link sent to ${emailOrPhone}. Please check your email.`);
      this.showLogin();
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    } finally {
      this.loading = false;
    }
  }
  
  // Remove these unused methods:
  // verifyOTP()
  // resetPassword()
  // startCountdown()
}
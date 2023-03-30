import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/interfaces/Login.interface';
import { User } from 'src/app/shared/interfaces/user.interface';
import { ApiService } from 'src/app/shared/services/api.service';
import { UseService } from 'src/app/shared/services/use.service';
import { createPasswordStrengthValidator } from 'src/app/shared/validators/password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: any;
  submitted = false;
  loginDet: Login | undefined
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private userService: UseService,
    private router: Router) { }

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }
  async onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    //True if all the fields are filled
    if (this.submitted) {
      this.login(this.loginForm.value)
      this.router.navigate(['info'])
    }

  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6),
      Validators.maxLength(10)
      ]]
    });
  }
  initForm() {

  }


  login(loginDet: Login) {

    this.apiService.Login(loginDet)
      .subscribe((res: User) => {
        this.userService.userDetails = res
      })
  }
}

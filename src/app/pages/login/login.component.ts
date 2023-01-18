import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDispatcherService } from 'src/app/services/login-dispatcher.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public userEmail!: string;
  public userPassword!: string;
  public loading = false;

  hide: boolean = true;

  loginForm: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required]],
    password: [null, [Validators.required]]
  });

  constructor(
    private loginDispatcherService: LoginDispatcherService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private errorHandler: ErrorHandlerService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  showHiddePassword() {
    this.hide = !this.hide;
  }

}

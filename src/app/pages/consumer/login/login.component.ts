import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { LoginService } from 'src/app/services/login.service';
import { LoginSettingsService } from './../../../services/login-settings.service';
import { MessageHandlerService } from './../../../services/message-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginConsumerComponent implements OnInit {

  public loading: Boolean = false;
  public hide: Boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private errorHandler: ErrorHandlerService,
    private messageHandler: MessageHandlerService,
    private loginService: LoginService,
    private loginSettingsService: LoginSettingsService
  ) { }

  loginForm: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]]
  });

  ngOnInit(): void {
  }

  public login(): void {

    this.loading = true;

    if (!this.loginForm.valid) {
      console.log(this.loginForm);
      this.loading = false;
      this.loginForm.markAllAsTouched();
      this.messageHandler.showMessage("Verifique o preenchimento dos campos!", "warning-snackbar");
      return;
    }

    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;

    this.loginService.login(email, password, "consumer").subscribe((data) => {

      if (data.status == 400) {

        this.messageHandler.showMessage(data.message, "danger-snackbar");
        this.loginForm.controls.email.setValue("");
        this.loginForm.controls.password.setValue("");

      } else if (data.status == 200) {

        //Save user data to localstorage
        this.loginSettingsService.setLogin(data);
        this.messageHandler.showMessage("Logado com sucesso!", "success-snackbar");
        this.router.navigateByUrl('/consumer/home');

      }

      this.loading = false;

    }, error => {
      console.log(error);
      this.errorHandler.handleError(error);
      this.loading = false;
    });
  }

  public showHiddePassword(): void {
    this.hide = !this.hide;
  }

}

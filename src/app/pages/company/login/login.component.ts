import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { LoginSettingsService } from 'src/app/services/login-settings.service';
import { LoginService } from 'src/app/services/login.service';
import { MessageHandlerService } from 'src/app/services/message-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginCompanyComponent implements OnInit {

  public loading: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private errorHandler: ErrorHandlerService,
    private messageHandler: MessageHandlerService,
    private loginService: LoginService,
    private loginSettingsService: LoginSettingsService
  ) { }

  loginForm: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required]],
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

    this.loginService.login(email, password, "company").subscribe((data) => {

      if (data.status == 400) {

        this.messageHandler.showMessage(data.message, "danger-snackbar");
        this.loginForm.controls.email.setValue("");
        this.loginForm.controls.password.setValue("");

      } else if (data.status == 200) {

        //Save token to localstorage
        this.loginSettingsService.setLogin(data._token);
        this.messageHandler.showMessage("Logado com sucesso!", "success-snackbar");
        this.router.navigateByUrl('/company/home');

      }

      this.loading = false;

    }, error => {
      console.log(error);
      this.errorHandler.handleError(error);
      this.loading = false;
    });
  }
}

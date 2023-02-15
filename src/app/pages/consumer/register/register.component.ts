import { CustomValidation } from './../../../utils/custom-validation';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { LoginSettingsService } from 'src/app/services/login-settings.service';
import { MessageHandlerService } from 'src/app/services/message-handler.service';
import { RegisterConsumerService } from 'src/app/pages/consumer/services/register-consumer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterConsumerComponent implements OnInit {

  public hidePassword: Boolean = true;
  public hideRepeatPassword: Boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private errorHandler: ErrorHandlerService,
    private messageHandler: MessageHandlerService,
    private registerConsumerService: RegisterConsumerService,
    private loginSettingsService: LoginSettingsService
  ) { }

  registerConsumerForm: FormGroup = this.formBuilder.group({
    first_name: [null, [Validators.required]],
    last_name: [null, [Validators.required]],
    user_email: [null, [Validators.required, Validators.email]],
    type_user: [null],
    phone: [null, [Validators.required, CustomValidation.validatePhoneNumber]],
    cpf: [null, [Validators.required, CustomValidation.validateCpf]],
    password: [null, [Validators.required]],
    repeat_password: [null, [Validators.required]]
  });

  ngOnInit(): void {
  }

  public registerUser(): void {

    if (!this.registerConsumerForm.valid) {
      console.log(this.registerConsumerForm);
      this.registerConsumerForm.markAllAsTouched();
      this.messageHandler.showMessage("Verifique o preenchimento dos campos!", "warning-snackbar");
      return;
    }

    if (this.registerConsumerForm.controls.password.value != this.registerConsumerForm.controls.repeat_password.value) {
      this.messageHandler.showMessage("As senhas não coincidem!", "warning-snackbar");
      return;
    }

    let user = {
      full_name: `${this.registerConsumerForm.controls.first_name.value.trim()} ${this.registerConsumerForm.controls.last_name.value.trim()}`,
      user_email: this.registerConsumerForm.controls.user_email.value,
      type_user: 'consumer',
      phone: this.registerConsumerForm.controls.phone.value,
      cpf: this.registerConsumerForm.controls.cpf.value,
      password: this.registerConsumerForm.controls.password.value
    }

    this.registerConsumerService.createUser(user).subscribe((data) => {

      if (data.status == 400) {
        this.messageHandler.showMessage(data.message, "danger-snackbar");
      } else if (data.status == 200) {
        //Save token to localstorage
        this.loginSettingsService.setLogin(data);
        this.messageHandler.showMessage(data.message, "success-snackbar");
        this.router.navigateByUrl('/consumer/home');
      }

    }, error => {
      console.log(error);
      this.errorHandler.handleError(error);
    });

  }

  public showHiddePassword(): void {
    this.hidePassword = !this.hidePassword;
  }

  public showHiddeRepeatPassword(): void {
    this.hideRepeatPassword = !this.hideRepeatPassword;
  }
}

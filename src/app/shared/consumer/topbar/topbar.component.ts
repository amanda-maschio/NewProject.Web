import { MessageHandlerService } from 'src/app/services/message-handler.service';
import { Component, Input, OnInit } from '@angular/core';
import { LoginSettingsService } from 'src/app/services/login-settings.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';

@Component({
  selector: 'app-consumer-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  public user_name: string = '';
  public user_picture_url: string = '';

  @Input()
  currentPage: string;

  constructor(
    private loginService: LoginService,
    private loginSettingsService: LoginSettingsService,
    private router: Router,
    private messageHandler: MessageHandlerService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.setUserInfo();
    this.setPageActive();
  }

  public setPageActive(): void {
    document.getElementById(`${this.currentPage}`).classList.add('active');
  }

  public setUserInfo(): void {
    this.user_picture_url = localStorage.getItem('picture_url');
    let user_full_name = localStorage.getItem('full_name').split(" ");

    user_full_name.length == 1 ?
      this.user_name = user_full_name[0]
      :
      this.user_name = `${user_full_name[0]} ${user_full_name[user_full_name.length - 1]}`
  }

  public logout(): void {

    const token = localStorage.getItem('token');

    this.loginService.logout(token).subscribe((data) => {
      this.loginSettingsService.setLogout();
      this.router.navigateByUrl('/consumer/login'); 
    }, error => {
      console.log(error);
      this.errorHandler.handleError(error);
    });

  }
}

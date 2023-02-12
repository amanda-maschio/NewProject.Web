import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeConsumerComponent implements OnInit {

  public user_full_name: string = '';
  public user_picture_url: string = '';

  constructor() { }

  ngOnInit(): void {

    this.user_full_name = localStorage.getItem('full_name');
    this.user_picture_url = localStorage.getItem('picture_url');

  }

}

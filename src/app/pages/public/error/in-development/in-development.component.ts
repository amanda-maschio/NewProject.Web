import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-in-development',
  templateUrl: './in-development.component.html',
  styleUrls: ['./in-development.component.scss']
})
export class InDevelopmentComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

}

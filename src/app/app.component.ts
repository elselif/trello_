import { Component, Input, OnInit } from '@angular/core';

import { Board, Column, ListItem } from './model/ListArray';
import { LocalServiceService } from './service/localService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  implements OnInit  {

  isDarkEnable = false;
  presentTheme$ = new BehaviorSubject<string>('theme-light');

  constructor() {}

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.presentTheme$.next(savedTheme);
    }
  }

  changeTheme() {
    this.presentTheme$.value === 'theme-light'
      ? this.presentTheme$.next('theme-dark')
      : this.presentTheme$.next('theme-light');
    localStorage.setItem('theme', this.presentTheme$.value);
    this.isDarkEnable = !this.isDarkEnable;
  }
}


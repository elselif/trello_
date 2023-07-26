import { Component, Input, OnInit } from '@angular/core';

import { Board, Column, ListItem } from './model/ListArray';
import { LocalServiceService } from './service/localService.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  implements OnInit  {



  constructor( private router: ActivatedRoute) { }

  ngOnInit(): void {


  }






}

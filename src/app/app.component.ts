import { Component, Input, OnInit } from '@angular/core';

import { Column, ListItem } from './model/ListArray';
import { LocalServiceService } from './service/localService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private localSercive : LocalServiceService) { }

  ngOnInit(): void {

    let returnedData = this.localSercive.getFromLocal();
    if(returnedData.length<0)
    {
      this.initAllArray();
    }else {
      this.AllArray = returnedData;
    }
    this.initAllTitles();
  }

  allTitle: string[] = [];
  columnTitle: string = '';

  todo: Column = {
    columnTitle: 'TO-DO',
    array: [
      {
        title: 'Projeyi yap',
        editingTitle : '',
        isEditing : false
      },
      {
        title: 'Projeyi yapma',
        editingTitle : '',
        isEditing : false
      },
    ],
  };

  done: Column = {
    columnTitle: 'Doing',
    array: [
      {
        title: 'Projeyi yaptim',
        editingTitle : '',
  isEditing : false
      },
      {
        title: 'Projeyi yapmadim',
        editingTitle : '',
  isEditing : false
      },
    ],
  };

  AllArray: Column[] = [];

  initAllArray(): void {
    this.AllArray.push(this.todo);
    this.AllArray.push(this.done);
    this.localSercive.savetoLocal(this.AllArray);

  }

  createNewColumn() {
    let tempColumn: Column = {
      columnTitle: this.columnTitle,
      array: [],
    };

    this.columnTitle = '';
    this.AllArray.push(tempColumn);
    this.localSercive.savetoLocal(this.AllArray);
    this.initAllTitles();

  }

  initAllTitles() {
    this.AllArray.forEach((e) => {
      this.allTitle.push(e.columnTitle);
    });
    this.localSercive.savetoLocal(this.AllArray);

  }
}

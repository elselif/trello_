import { Component, Input, OnInit } from '@angular/core';

import { Column, ListItem } from './model/ListArray';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.initAllArray();
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
  }

  createNewColumn() {
    let tempColumn: Column = {
      columnTitle: this.columnTitle,
      array: [],
    };

    this.columnTitle = '';
    this.AllArray.push(tempColumn);
    this.initAllTitles();
  }

  initAllTitles() {
    this.AllArray.forEach((e) => {
      this.allTitle.push(e.columnTitle);
    });
  }
}

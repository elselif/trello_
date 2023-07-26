import { Injectable } from '@angular/core';
import { Board, Column } from '../model/ListArray';

@Injectable({
  providedIn: 'root',
})
export class LocalServiceService {
  constructor() {}

  savetoLocal(data: any) {
    let allBoards = JSON.stringify(data);

    localStorage.setItem('allBoards', allBoards);
  }

  getFromLocal(): Board[] {
    let item = localStorage.getItem('allBoards');

    if (item) {
      let parsedItem = JSON.parse(item);
      return parsedItem;
    }

    return [];
  }
}

import { Injectable } from '@angular/core';
import { Column } from '../model/ListArray';

@Injectable({
  providedIn: 'root'
})
export class LocalServiceService {
constructor() { }



savetoLocal(data:any)
{
  let kaydedilecek = JSON.stringify(data);

  localStorage.setItem('allBoard',kaydedilecek);
}

  getFromLocal(): Column[] {
    let item = localStorage.getItem('allBoard');

    if (item) {

    let parsedItem = JSON.parse(item);
      return parsedItem;
  }


  return [];
}



}

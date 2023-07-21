import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { Column, ListItem } from '../model/ListArray';
import { LocalServiceService } from '../service/localService.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css'],
})
export class ColumnComponent implements OnInit {
  constructor(private localSercive : LocalServiceService) {}
  title: string = '';
  editingTitle: string;
  isEditing: boolean;

  @Input() allTitle: string[] = [];
  ngOnInit() {

  }

  @Input() ifState: boolean = false;
  @Input() Column: Column;
  @Input() AllArray: Column[];

  drop(event: CdkDragDrop<Column>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data.array,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data.array,
        event.container.data.array,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.localSercive.savetoLocal(this.AllArray);
  }

  addNewItem() {
    let tempItem: ListItem = {
      title: this.title,

    };
    this.Column.array.push(tempItem);
    this.title = '';
    this.localSercive.savetoLocal(this.AllArray);
  }
  deleteItem(itemTitleToDelete: string) {
    // Silinecek öğenin indeksini buluyoruz
    const indexToDelete = this.Column.array.findIndex((item) => item.title === itemTitleToDelete);

    // Eğer böyle bir öğe varsa siliyoruz
    if (indexToDelete !== -1) {
      this.Column.array.splice(indexToDelete, 1);
    }

  }

   editItem(item: ListItem) {
    item.editingTitle = item.title; // Başlangıçta düzenleme alanını mevcut başlıkla doldur
    item.isEditing = true; // Düzenleme moduna geç
    this.ifState = true ;

  }

  updateItem(item: ListItem) {
    item.title = item.editingTitle || ''; // Başlığı güncelle
    item.isEditing = false; // Düzenleme modunu kapat
    item.editingTitle = ''; // Düzenleme alanını sıfırla

  }

  cancelUpdate(item: ListItem) {
    item.isEditing = false; // Düzenleme modunu iptal et
    item.editingTitle = ''; // Düzenleme alanını sıfırla

  }

}

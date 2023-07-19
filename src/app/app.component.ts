import { Component, Input, OnInit } from '@angular/core';
import {NgFor} from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { ListArray, ListItem } from './model/ListArray';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  ngOnInit(): void {
    this.addNewDiv()
  }

  title = 'todo-list';
  // todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  // done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  todo : ListArray = {
    columnTitle : 'TO-DO',
    array : [
      {
        title : 'Projeyi yap',
      },
      {
        title : 'Projeyi yapma',
      },
    ]
  }

  done : ListArray = {
    columnTitle : 'TO-DO',
    array : [
      {
        title : 'Projeyi yaptım',
      },
      {
        title : 'Projeyi yapmadım',
      },
    ]
  }

  newItem: ListItem = {
    title : ''
  }
  value = 'Clear me';
  AllArray : ListArray[] = [];

  exampleContainers: any[] = []; // Yeni blokları saklamak için dizi

  addNewDiv() :void {

    this.AllArray.push(this.todo);
    this.AllArray.push(this.done);

  }



  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


  addNewItem() {
    if (this.newItem) {
      this.todo.array.push(this.newItem);
      this.newItem.title = ''; // Input alanını sıfırla
    }
  }
}

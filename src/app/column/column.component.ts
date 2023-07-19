import { CdkDragDrop, moveItemInArray,
  transferArrayItem, } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { ListArray, ListItem } from '../model/ListArray';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  newItem: ListItem = {
    title : ''
  }

  value = 'Clear me';
  constructor() { }

  ngOnInit() {
  }

  @Input() ifState : boolean = false
  @Input() ListArray : ListArray
  @Input() AllArray : any
  @Input() title : string =''



  drop(event: CdkDragDrop<any>) {
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
      this.ListArray.array.push(this.newItem);
      this.newItem.title = ''; // Input alanını sıfırla
    }
  }


}

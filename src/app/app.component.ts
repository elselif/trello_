import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  newItem: string = '';
  value = 'Clear me';

  exampleContainers: any[] = []; // Yeni blokları saklamak için dizi

  addNewDiv() :void {
    const newContainer = {
      todoList: [],
      doneList: []
    };

    this.exampleContainers.push(newContainer);
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
      this.todo.push(this.newItem);
      this.newItem = ''; // Input alanını sıfırla
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalServiceService } from '../service/localService.service';
import { Board, Column } from '../model/ListArray';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  AllBoard : Board[] = [];
  currentBoard : Board;
  constructor(private localSercive : LocalServiceService,private router : Router,private Router : ActivatedRoute) {}


  ngOnInit(): void {


    let paramId = this.Router.snapshot.paramMap.get('boardId');
    this.AllBoard = this.localSercive.getFromLocal();
    this.currentBoard = this.AllBoard[Number(paramId)];
    if (this.AllBoard.length <= 0) {
      this.initAllBoards();
    }
    this.initAllTitles();

  }

  allTitle: string[] = [];
  columnTitle: string = '';
  boardTitle : string = '';

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




  initAllBoards(): void {
    // Boş bir sütun dizisi ile boardları başlat
    this.AllBoard.push({ id: 1, boardtitle: 'Board 1', arrayColumn: [] });
    this.AllBoard.push({ id: 2, boardtitle: 'Board 2', arrayColumn: [] });
    this.localSercive.savetoLocal(this.AllBoard);
  }

  navigateToBoard(boardId: number) {
    // Tıklanan boardun Id'siyle beraber yönlendirmeyi yapalım
    this.router.navigate(['/board', boardId]).then(() => {
      window.location.reload();
    });


  }


  createNewColumn() {
    let tempColumn: Column = {
      columnTitle: this.columnTitle,
      array: [],
    };

    this.columnTitle = '';
    this.currentBoard.arrayColumn.push(tempColumn); // Sütunu belirli bir boarda ekle
    this.localSercive.savetoLocal(this.AllBoard);
    this.initAllTitles(); // initAlltitles hata veriyor
  }



  createNewBoard()
  {

    let tempBoard: Board = {
      id: this.AllBoard.length + 1, // Yeni bir ID ata
      boardtitle: this.boardTitle,
      arrayColumn: []
    };

    this.boardTitle = '';
    this.AllBoard.push(tempBoard);
    this.localSercive.savetoLocal(this.AllBoard);
    this.initAllTitles();

  }




  initAllTitles() {
    this.currentBoard.arrayColumn.forEach((e) => {
      this.allTitle.push(e.columnTitle);
    });
    this.localSercive.savetoLocal(this.AllBoard);
  }

}

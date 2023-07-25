import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ner-board',
  templateUrl: './ner-board.component.html',
  styleUrls: ['./ner-board.component.css']
})
export class NerBoardComponent {

  boardId: number;
  boardTitle : string;

  constructor(private route : ActivatedRoute) {}



  ngOnInit(): void {
    // Yönlendirilen yol üzerindeki boardId parametresini alalım
    this.route.paramMap.subscribe(params => {
      this.boardId = Number(params.get('boardId'));
      // Burada, this.boardId'ye göre ilgili boardun bilgilerini alabilir ve BoardDetailComponent içeriğini düzenleyebilirsiniz.
    });
  }

}

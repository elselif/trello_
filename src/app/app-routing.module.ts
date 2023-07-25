import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NerBoardComponent } from './ner-board/ner-board.component';

const routes: Routes = [
  {
    
    path: 'board/:boardId',
    component: NerBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

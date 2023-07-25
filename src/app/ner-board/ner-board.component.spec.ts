import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NerBoardComponent } from './ner-board.component';

describe('NerBoardComponent', () => {
  let component: NerBoardComponent;
  let fixture: ComponentFixture<NerBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NerBoardComponent]
    });
    fixture = TestBed.createComponent(NerBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

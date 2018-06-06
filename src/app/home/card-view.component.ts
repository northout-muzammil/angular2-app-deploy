import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'test-card-view',
  template: `
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" [src]="card.imagePath" alt="Card image">
      <div class="card-body">
        <h5 class="card-title">{{card.title | uppercase}}</h5>
        <p class="card-text">{{card.description | lowercase}}</p>
        <div class="row">
          <div class="col-md-4">
            <a (click)="openModal(card)" class="btn btn-primary">Detail</a>
          </div>
          <div class="col-md-4">
            <a (click)="deleteCard(card)" class="btn btn-danger">Delete</a>
          </div>
        </div>
      </div>
    </div>
    <br>
  `,
  styles: []
})
export class CardViewComponent implements OnInit {

  @Input() card: any;
  @Output()  clicked = new EventEmitter<object>();
  @Output()  delete = new EventEmitter<object>();
  openModal (card) {
    this.clicked.emit(card);
    // alert('Awsome It works!!!!');
  }
  deleteCard (card) {
    this.delete.emit(card.id);
    // alert('Awsome It works!!!!');
  }

  constructor() { }

  ngOnInit() {
  }



}

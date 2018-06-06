import {Component, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from './card.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import * as _ from 'lodash';
import {UtilityService} from '../services/utility.service';

import {AppComponent} from '../app.component';
import {ModalsComponent} from '../modals/modals.component';
import {ToastService} from '../services/toast.service';
import {BlockUiService} from '../services/block-ui.service';
import {ConfirmationModalComponent} from '../modals/confirmation-modal.component';
@Component({
  selector: 'test-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  modalRef: BsModalRef;
  newCard: object = {
    title: '',
    description: '',
    imagePath: '',
    type: 1
  };
  constructor(private router: Router, private cardService: CardService,
              private modalService: BsModalService, private utility: UtilityService ,
              private toastService: ToastService, private block: BlockUiService) {

    this.cardService.cardList$.subscribe(value => {
      this.getCard();
    });
  }
  cards = [];
  ngOnInit() {
    this.getCard();
    this.utility.displayHeader(true);
  }
  getCard() {
    this.block.start('Getting...');
    this.cardService.getCards().subscribe(data => {
      console.log(data);
      this.block.stop();
      this.cards = data;
    }, err => {
      console.log(err);
    });

  }

  openModal(card: any) {
    const modalConfig: object = {
      keyboard: false,
      class: 'modal-dialog-centered',
      backdrop: 'static',
      initialState: {newCard: card ? card : this.newCard}
    };
    // const initialState = {
    //   newCard: card ? card : this.newCard
    // };

    this.modalRef = this.modalService.show(ModalsComponent, modalConfig);
  }
  changeRoute() {
    this.router.navigate(['about']);
  }

  addCard(form) {
    this.cardService.addCard(form).subscribe(data => {
      console.log(data);
      this.getCard();
    }, err => {
      console.log(err);
    });
  }

  deleteCard(value) {
    const modalConfig: object = {
      keyboard: false,
      class: 'modal-dialog-centered',
      backdrop: 'static',
      initialState: {id: value}
    };
    this.modalRef = this.modalService.show(ConfirmationModalComponent, modalConfig);
    // this.block.start('Deleting...');
    // this.cardService.deleteCard(value).subscribe(data => {
    //   console.log(data);
    //   this.getCard();
    //   this.toastService.success('card deleted successfuly!!!');
    //   this.block.stop();
    // }, err => {
    //   console.log(err);
    // });
  }

  modal(value) {
    value.type = 2;
    this.openModal(value);
    // this.modalRef = this.modalService.open(MyComponent, {
    //   initialState: {
    //     products: [...some array of products]
    //   }
    // });
  }
}

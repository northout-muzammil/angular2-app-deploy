///<reference path="../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {CardService} from '../home/card.service';
import {BsModalRef} from 'ngx-bootstrap';
import {NgForm} from '@angular/forms';
import {ToastService} from '../services/toast.service';
import {ToastrService} from 'ngx-toastr';
import {BlockUiService} from '../services/block-ui.service';

@Component({
  selector: 'test-modals',
  templateUrl: './modals.component.html'
})
export class ModalsComponent {
  @ViewChild('cardForm') mytemplateForm: NgForm;

  constructor(private cardService: CardService, public modalRef: BsModalRef, private toastService: ToastService,
              private toastr: ToastrService, private block: BlockUiService) { }
  newCard: any;


  closeModal(type) {
    this.modalRef.hide();
    if (type == 1) {
      this.mytemplateForm.reset();
    }
  }

  updateCard (card) {
    console.log(card);
    this.block.start('Updating...');
    this.cardService.updateCard(card).subscribe(data => {
      this.closeModal(card.type);
      this.block.stop();
      this.cardService.getCardList(true);
      this.toastService.success('card updated successfuly!!!');
    }, err => {
      console.log(err);
    });
  }

  addCard(form) {
    console.log(form);
    this.block.start('Adding...');
    this.cardService.addCard(form).subscribe(data => {
      console.log(data);
      this.closeModal(form.type);
      this.block.stop();
      this.cardService.getCardList(true);
      this.toastService.success('card added successfuly!!!');

    }, err => {
      console.log(err);
    });
  }
}

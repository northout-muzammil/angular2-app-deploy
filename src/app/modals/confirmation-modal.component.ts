import { Component, OnInit } from '@angular/core';
import {BlockUiService} from '../services/block-ui.service';
import {CardService} from '../home/card.service';
import {ToastService} from '../services/toast.service';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'test-confirmation-modal',
  template: `
    <div class="modal-body text-center">
      <p>Are you sure you want to delete?</p>
      <button type="button" class="btn btn-default col-md-4" (click)="confirm(id)" >Yes</button>&nbsp;&nbsp;
      <button type="button" class="btn btn-primary col-md-4 col-md-offset-2" (click)="decline()" >No</button>
    </div>
  `,
  styles: []
})
export class ConfirmationModalComponent implements OnInit {
  id: any;
  constructor(private block: BlockUiService, private cardService: CardService, private toastService: ToastService,
              public modalRef: BsModalRef) {}

  ngOnInit() {
  }


  decline() {
    this.modalRef.hide();
  }

  confirm(id: any) {
    console.log(id);
    this.block.start('Deleting...');
    this.cardService.deleteCard(id).subscribe(data => {
      console.log(data);
      this.cardService.getCardList(true);
      this.toastService.success('card deleted successfuly!!!');
      this.block.stop();
      this.modalRef.hide();
    }, err => {
      console.log(err);
    });
  }

}

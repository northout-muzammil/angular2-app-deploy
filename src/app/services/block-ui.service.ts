import { Injectable } from '@angular/core';
import {BlockUI, NgBlockUI} from 'ng-block-ui';

@Injectable()
export class BlockUiService {
  @BlockUI() blockUI: NgBlockUI;
  constructor() { }

  start(message) {
    this.blockUI.start(message);
  }

  stop() {
    this.blockUI.stop();
  }
}

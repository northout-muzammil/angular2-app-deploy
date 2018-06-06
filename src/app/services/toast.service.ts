import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';


@Injectable()
export class ToastService {

  constructor(private toastr: ToastrService) { }

  success(message) {
    this.toastr.success('Success', message);
  }

  error(message) {
    this.toastr.error('Error', message);
  }
}

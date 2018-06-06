import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable()
export class UtilityService {
  private showHeaderNav = new Subject<any>();
  constructor() { }

  showHeaderNav$: Observable<any> = this.showHeaderNav.asObservable();

  displayHeader(value: boolean) {
    this.showHeaderNav.next( value);
  }
}

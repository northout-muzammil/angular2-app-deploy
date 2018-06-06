import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LocalStorageService} from 'ngx-store';
import {UtilityService} from './services/utility.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'test-header',
  templateUrl: './header.component.html',
  providers: []
})
export class HeaderComponent implements OnInit {
  showHeader = true;
  subscription: Subscription;
  constructor(private router: Router, private localStorage: LocalStorageService, private utility: UtilityService) {  }
  ngOnInit() {
  }

  logout() {
    this.localStorage.clear('all');
    this.router.navigate(['login']);
    this.utility.displayHeader(false);
  }

}

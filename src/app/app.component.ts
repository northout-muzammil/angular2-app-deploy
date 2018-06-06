import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalStorageService} from 'ngx-store';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {UtilityService} from './services/utility.service';




@Component({
  selector: 'test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Location , {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AppComponent implements OnInit {
  constructor (private router: Router, private localStorage: LocalStorageService,
               private activatedRoute: ActivatedRoute, private location: Location, private utility: UtilityService) {
  }
  showHeader: boolean;
  ngOnInit() {
    this.utility.showHeaderNav$.subscribe(
      value => {
        setTimeout(() => {
          this.showHeader = value;
        }, 50);
      }
    );
    const auth = this.localStorage.get('auth');
    if (auth) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['login']);
    }
  }
}

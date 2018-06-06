import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-store';
import {Router} from '@angular/router';
import {UtilityService} from '../services/utility.service';
import {AppComponent} from '../app.component';
import {ToastService} from '../services/toast.service';
@Component({
  selector: 'test-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  defaultCredentials = {
    username: 'admin',
    password: '123'
  };
  user: any = {};

  constructor(private localStorage: LocalStorageService, private router: Router, private utility: UtilityService,
              private toast: ToastService) {
  }

  ngOnInit() {
    this.utility.displayHeader(false);
  }

  login(user) {
    if (this.defaultCredentials.username === user.username && this.defaultCredentials.password === user.password ) {
      console.log('done!!!!');
      this.localStorage.set('auth', true);
      this.router.navigate(['home']);
      this.toast.success('Login Successfull');
    } else {
      this.toast.error('Invalid Credentials');
    }
  }

}

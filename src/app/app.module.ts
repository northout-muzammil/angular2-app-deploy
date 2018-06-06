import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { routing } from './app.routes';
import { HeaderComponent } from './header.component';
import { CardViewComponent } from './home/card-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import { CardHoverDirective } from './home/card-hover.directive';
import { LoginComponent } from './login/login.component';
import {LocalStorageService} from 'ngx-store';
import {UtilityService} from './services/utility.service';
import { ShowHeaderDirective } from './directives/show-header.directive';
import { ModalsComponent } from './modals/modals.component';
import {CardService} from './home/card.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {ToastService} from './services/toast.service';
import {BlockUiService} from './services/block-ui.service';
import {BlockUIModule} from 'ng-block-ui';
import { ConfirmationModalComponent } from './modals/confirmation-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    HeaderComponent,
    CardViewComponent,
    CardHoverDirective,
    LoginComponent,
    ShowHeaderDirective,
    ModalsComponent,
    ConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule,
    ToastrModule.forRoot(),
    BlockUIModule.forRoot()
  ],
  providers: [LocalStorageService, UtilityService, CardService, ToastService, BlockUiService],
  bootstrap: [AppComponent],
  entryComponents: [ModalsComponent, ConfirmationModalComponent ]
})
export class AppModule { }

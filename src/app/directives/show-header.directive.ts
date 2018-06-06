import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {LocalStorageService} from 'ngx-store';

@Directive({
  selector: '[testShowHeader]'
})
export class ShowHeaderDirective {
 @Input() set testShowHeader(value) {
    // if (auth) {
    //   this.vcRef.createEmbeddedView(this.templateRef);
    // } else {
    //   this.vcRef.clear();
    // }
  }



//   constructor(private templateRef: TemplateRef, private vcRef: ViewContainerRef, private localStorage: LocalStorageService) {
// }

}

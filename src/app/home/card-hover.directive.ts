import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[testCardHover]'
})
export class CardHoverDirective {
  @HostBinding('class.hover') isHover = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isHover = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHover = false;
  }


}

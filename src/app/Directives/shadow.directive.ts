import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {

  highlightColor:string="grey";
  defaultColor:string="darkgray";
  constructor(private element:ElementRef) { 
    element.nativeElement.style.boxShadow=`1px 1px 1px 1px ${this.defaultColor}`;
  }

  @HostListener('mouseover') onMouseEnter()
  {
    this.element.nativeElement.style.boxShadow=`15px 5px 15px 10px ${this.highlightColor} `;
  }

  @HostListener('mouseout') onMouseOut()
  {
    this.element.nativeElement.style.boxShadow=`1px 1px 1px 1px ${this.defaultColor}`;
  }

}

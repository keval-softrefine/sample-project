import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style;
  }

}

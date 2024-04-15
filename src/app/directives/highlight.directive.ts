import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  constructor(private el:ElementRef) {}


  // Hostbinding and HostListener are decorators 
  @HostBinding("style.backgroundColor")
  bgColor="red"

  @HostListener("mouseenter") 
  changeFontSize(){
    this.el.nativeElement.style.fontSize = "40px";
  }
  @HostListener("mouseleave")
  RemoveFontSize(){
    this.el.nativeElement.style.fontSize = "30px";  
  }

}

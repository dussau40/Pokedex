import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[pkmn-shadow-card]' })
export class ShadowCardDirective {
  constructor(private el: ElementRef, private renderer: Renderer) {
    this.setBorder('#f5f5f5');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#009688');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }

  private setBorder(color: string) {
    const style = 'solid 4px ' + color;
    this.renderer.setElementStyle(this.el.nativeElement, 'border', style);
  }
}
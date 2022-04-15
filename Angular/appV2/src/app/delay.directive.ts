import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective implements OnInit {

  @Input() appDelay: number = 0;

  constructor( 
    private template: TemplateRef<any>,
    private view: ViewContainerRef,
   ) { }


    ngOnInit(): void {

      setTimeout(() => {
        console.log(this.template);
        this.view.createEmbeddedView(this.template);
      }, this.appDelay * 1000);

    }

}

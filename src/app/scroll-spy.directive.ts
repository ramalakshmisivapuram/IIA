import { Directive, Injectable, Input, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[scrollSpy]'
})
export class ScrollSpyDirective {
    @Input() public spiedTags = [];
    @Output() public courseChange = new EventEmitter<string>();
    private currentCourse: string;

    private readonly newProperty = this.currentcourse;

    constructor(private _el: ElementRef) {}

    @HostListener('scroll', ['$event'])
    onScroll(event: any) {
        let currentCourse: string;
        const children = this._el.nativeElement.children;
        const scrollTop = event.target.scrollTop;
        const parentOffset = event.target.offsetTop;
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentCourse = element.id;
                }
            }
        }
        if (currentCourse !== this.currentCourse) {
            this.currentCourse = currentCourse;
            
        }
    }
    currentcourse(currentcourse: any) {
        throw new Error("Method not implemented.");
    }

}

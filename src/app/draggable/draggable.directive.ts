import { Directive, OnInit, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap, takeUntil } from "rxjs/operators";


@Directive({
    selector: '[draggable]'
})
export class Draggable implements OnInit {

    public mouseup = new EventEmitter<MouseEvent>();
    public mousedown = new EventEmitter<MouseEvent>();
    public mousemove = new EventEmitter<MouseEvent>();

    public mousedrag: Observable<{top, left}>;

    @HostListener('document:mouseup', ['$event'])
    onMouseup(event: MouseEvent) {
        this.mouseup.emit(event);
    }

    @HostListener('mousedown', ['$event'])
    onMousedown(event: MouseEvent) {
        this.mousedown.emit(event);
        return false; // Call preventDefault() on the event
    }

    @HostListener('document:mousemove', ['$event'])
    onMousemove(event: MouseEvent) {
        this.mousemove.emit(event);
    }

    constructor(public element: ElementRef) {
        this.element.nativeElement.style.position = 'relative';
        this.element.nativeElement.style.cursor = 'pointer';

        this.mousedrag = this.mousedown.pipe(map((event => {
            return {
                top: event.clientY - this.element.nativeElement.getBoundingClientRect().top,
                left: event.clientX - this.element.nativeElement.getBoundingClientRect().left,
            };
        }))).pipe(
        mergeMap(
            imageOffset => this.mousemove.pipe(map((pos => ({
                top: pos.clientY - imageOffset.top,
                left: pos.clientX - imageOffset.left
            })))).pipe(
            takeUntil(this.mouseup))
        ));
    }

    ngOnInit() {
        this.mousedrag.subscribe({
            next: pos => {
                this.element.nativeElement.style.top = pos.top + 'px';
                this.element.nativeElement.style.left = pos.left + 'px';
            }
        });
    }
}
import {Component, Input, Output, EventEmitter, ElementRef} from '@angular/core';

@Component({
    selector: 'puk-rating',
    templateUrl: 'src/puk-rating/puk-rating.html',
    styleUrls: ['src/puk-rating/puk-rating.css']
})
export class RatingComponent {

    private el:HTMLElement;
    private defaultCount:number = 1;

    pukList:number[] = [];

    @Input() pukCount:number;
    @Input() pukModel:number;
    @Input() pukEmptyImage:string;
    @Input() rating:number;
    @Input() itemId:number;
    @Output() pukClick:EventEmitter<any> = new EventEmitter<any>();



    constructor(el: ElementRef) {
        this.el = el.nativeElement;
        this.pukCount = this.pukCount || this.defaultCount;
    }



    ngOnInit() {

        this.el.style.backgroundImage = this.pukEmptyImage;

        for (let i = 1; i <= this.pukCount; i++) {
            this.pukList.push(i);
        }

    }

    onClick(pukModel:number):void {
        this.pukModel = pukModel;
        this.pukClick.emit(this.pukModel);
        // this.ratingClick.emit({
        //     itemId: this.itemId,
        //     rating: rating
        // });
    }


}
import {Component, Input, Output, EventEmitter, ElementRef} from '@angular/core';

@Component({
    selector: 'puk-rating',
    templateUrl: 'src/puk-rating/puk-rating.html',
    styleUrls: ['src/puk-rating/puk-rating.css']
})
export class RatingComponent {

    private defaultCount:number = 1;

    pukList:number[] = [];

    @Input() pukCount:number;
    @Input() pukModel:number;
    @Input() pukEmptyImage:string;
    @Input() pukFullImage:string;
    @Input() pukImageWidth:string;
    @Input() pukImageHeight:string;
    @Input() pukIconColor:string;
    @Input() pukIconSize:string;
    @Input() rating:number;
    @Input() itemId:number;

    @Output() pukClick = new EventEmitter();


    constructor(el:ElementRef) {
        this.pukCount = this.pukCount || this.defaultCount;
    }


    ngOnInit() {
        for (let i = 1; i <= this.pukCount; i++) {
            this.pukList.push(i);
        }

    }

    onClick(pukModel:number):void {
        this.pukModel = pukModel;
        this.pukClick.emit(this.pukModel);
    }

    getClass(index:number):void {

    }

    getStyle(index:number):Object {
        if (this.pukEmptyImage && this.pukFullImage) {
            let image_url = index <= this.pukModel ? this.pukFullImage : this.pukEmptyImage;
            return {
                "background": "url(" + image_url + ")",
                "background-size": this.pukImageWidth + ' ' + this.pukImageHeight,
                "display": "inline-block",
                "width": this.pukImageWidth,
                "height": this.pukImageHeight
            };
        }
        else {
            return {
                "color": this.pukIconColor,
                "font-size": this.pukIconSize
            }
        }

    }


}
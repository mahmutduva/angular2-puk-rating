import {Component, Input, Output, EventEmitter} from '@angular/core';

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
    @Input() pukIconBase:string;
    @Input() pukFullIcon:string;
    @Input() pukEmptyIcon:string;
    @Input() pukIconColor:string;
    @Input() pukIconSize:string;
    @Input() rating:number;
    @Input() itemId:number;

    @Output() pukClick = new EventEmitter();

    /**
     *
     */
    public constructor() {
        this.pukCount = this.pukCount || this.defaultCount;
    }


    ngOnInit() {
        for (let i = 1; i <= this.pukCount; i++) {
            this.pukList.push(i);
        }

    }

    private onClick(pukModel:number):void {
        this.pukModel = pukModel;
        this.pukClick.emit(this.pukModel);
    }

    /**
     * @name getClass
     * @param index
     */
    private getClass(index:number):Object {
        if (this.pukEmptyImage && this.pukFullImage) {
            return;
        }
        else {
            return index <= this.pukModel ? this.pukFullIcon + ' ' + this.pukIconBase : this.pukEmptyIcon + ' ' + this.pukIconBase;
        }
    }

    private getStyle(index:number):Object {
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
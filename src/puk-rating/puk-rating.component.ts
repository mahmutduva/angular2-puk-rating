import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'puk-rating',
    templateUrl: 'src/puk-rating/puk-rating.html',
    styleUrls: ['src/puk-rating/puk-rating.css']
})
export class RatingComponent {
    @Input() rating: number;
    @Input() itemId: number;
    @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

    inpustName:string;
    ngOnInit() {
        this.inpustName = this.itemId + '_rating';
    }
    onClick(rating: number): void {
        this.rating = rating;
        this.ratingClick.emit({
            itemId: this.itemId,
            rating: rating
        });
    }
}
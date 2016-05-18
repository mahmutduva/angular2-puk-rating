import { Component } from '@angular/core';
import { RatingComponent } from './puk-rating/puk-rating.component';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'my-app',
    templateUrl: 'src/app.html',
    directives: [RatingComponent]
})
export class AppComponent {
    ratingClicked: number;
    itemIdRatingClicked: number;
    items: any[] = [
        {
            "id": 0,
            "rating": 3,
            "contact": "Dennis Phillips",
            "company": "PROFLEX"
        },
        {
            "id": 1,
            "rating": 1,
            "contact": "Morgan Mccarthy",
            "company": "CENTREXIN"
        },
        {
            "id": 2,
            "rating": 2,
            "contact": "Brady Craft",
            "company": "JIMBIES"
        },
        {
            "id": 3,
            "rating": 5,
            "contact": "Alvarado Roman",
            "company": "TERRAGO"
        },
        {
            "id": 4,
            "rating": 4,
            "contact": "Clark Daugherty",
            "company": "ISOTRONIC"
        }
    ];
    ratingComponetClick(clickObj: any): void {
        var item = this.items.filter((item: any) => item.id === clickObj.itemId);
        if(!!item && item.length === 1){
            item[0].rating = clickObj.rating;
            this.ratingClicked = clickObj.rating;
            this.itemIdRatingClicked = clickObj.itemId;
        }

    }
}

bootstrap(AppComponent);
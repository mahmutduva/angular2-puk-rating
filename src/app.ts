import {Component} from '@angular/core';
import {RatingComponent} from './puk-rating/puk-rating.component';
import {bootstrap} from '@angular/platform-browser-dynamic';

@Component({
    selector: 'my-app',
    templateUrl: 'src/app.html',
    directives: [RatingComponent]
})
export class AppComponent {
    public item:any =
    {
        "id": 0,
        "puk": 4,
        "selectedPuk": 3,
        "rating": 3,
        "contact": "Dennis Phillips",
        "company": "PROFLEX"
    };

    pukModelChange(newPukValue:any):void {
        this.item.selectedPuk = newPukValue;
    };
}

bootstrap(AppComponent);
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var puk_rating_component_1 = require('./puk-rating/puk-rating.component');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var AppComponent = (function () {
    function AppComponent() {
        this.items = [
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
    }
    AppComponent.prototype.ratingComponetClick = function (clickObj) {
        var item = this.items.filter(function (item) { return item.id === clickObj.itemId; });
        if (!!item && item.length === 1) {
            item[0].rating = clickObj.rating;
            this.ratingClicked = clickObj.rating;
            this.itemIdRatingClicked = clickObj.itemId;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'src/app.html',
            directives: [puk_rating_component_1.RatingComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
platform_browser_dynamic_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map
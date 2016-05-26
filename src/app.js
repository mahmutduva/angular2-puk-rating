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
        this.itemImage = {
            "puk": 4,
            "selectedPuk": 3,
        };
        this.itemSvg = {
            "puk": 8,
            "selectedPuk": 2,
        };
    }
    /**
     * @name pukChangeSvg
     * @param newPukValue
     */
    AppComponent.prototype.pukChangeSvg = function (newPukValue) {
        this.itemSvg.selectedPuk = newPukValue;
    };
    ;
    /**
     * @name pukChangeImage
     * @param newPukValue
     */
    AppComponent.prototype.pukChangeImage = function (newPukValue) {
        this.itemImage.selectedPuk = newPukValue;
    };
    ;
    /**
     * @name pukModelHover
     * @param pukValue
     */
    AppComponent.prototype.pukHover = function (pukValue) {
        this.itemHover = pukValue;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'src/app.html',
            directives: [puk_rating_component_1.RatingComponent],
            styles: ["\n    .panel {\n      display: inline-block;\n      width: 100%;\n      margin-bottom: 50px;\n    }\n    .text{\n        display: inline-block; \n        margin-left: 50px;\n        font-size: 32px;\n    }\n  "],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
platform_browser_dynamic_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map
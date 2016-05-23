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
var RatingComponent = (function () {
    function RatingComponent(el) {
        this.defaultCount = 1;
        this.pukList = [];
        this.pukClick = new core_1.EventEmitter();
        this.pukCount = this.pukCount || this.defaultCount;
    }
    RatingComponent.prototype.ngOnInit = function () {
        for (var i = 1; i <= this.pukCount; i++) {
            this.pukList.push(i);
        }
    };
    RatingComponent.prototype.onClick = function (pukModel) {
        this.pukModel = pukModel;
        this.pukClick.emit(this.pukModel);
    };
    RatingComponent.prototype.getClass = function (index) {
    };
    RatingComponent.prototype.getStyle = function (index) {
        if (this.pukEmptyImage && this.pukFullImage) {
            var image_url = index <= this.pukModel ? this.pukFullImage : this.pukEmptyImage;
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
            };
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RatingComponent.prototype, "pukCount", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RatingComponent.prototype, "pukModel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RatingComponent.prototype, "pukEmptyImage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RatingComponent.prototype, "pukFullImage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RatingComponent.prototype, "pukImageWidth", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RatingComponent.prototype, "pukImageHeight", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RatingComponent.prototype, "pukIconColor", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RatingComponent.prototype, "pukIconSize", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RatingComponent.prototype, "rating", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RatingComponent.prototype, "itemId", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RatingComponent.prototype, "pukClick", void 0);
    RatingComponent = __decorate([
        core_1.Component({
            selector: 'puk-rating',
            templateUrl: 'src/puk-rating/puk-rating.html',
            styleUrls: ['src/puk-rating/puk-rating.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], RatingComponent);
    return RatingComponent;
}());
exports.RatingComponent = RatingComponent;
//# sourceMappingURL=puk-rating.component.js.map
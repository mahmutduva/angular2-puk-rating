###[Live Demo](http://plnkr.co/edit/2TcMDlbFird92MTzWgz8?p=preview)

# angular2-puk-rating
Rating system for everything

### NPM
```
$ npm install angular2-puk-rating

```

## Simple Example

```TypeScript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { RatingComponent } from './puk-rating/puk-rating.component';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        RatingComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

```TypeScript
// app.component.ts
import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'src/app.html',
    styles: [`
    .panel {
      display: inline-block;
      width: 100%;
      margin-bottom: 50px;
    }
    .text{
        display: inline-block;
        margin-left: 50px;
        font-size: 32px;
    }
  `],
})
export class AppComponent {

    public itemImage:any =
    {
        "puk": 4,
        "selectedPuk": 3,
    };

    public itemSvg:any =
    {
        "puk": 8,
        "selectedPuk": 2,
    };

    public itemHover:number;

    /**
     * @name pukChangeSvg
     * @param newPukValue
     */
    pukChangeSvg(newPukValue:number):void {
        this.itemSvg.selectedPuk = newPukValue;
    };


    /**
     * @name pukChangeImage
     * @param newPukValue
     */
    pukChangeImage(newPukValue:number):void {
        this.itemImage.selectedPuk = newPukValue;
    };


    /**
     * @name pukModelHover
     * @param pukValue
     */
    pukHover(pukValue:number) {
        this.itemHover = pukValue;
    }

}

```


```Html
<puk-rating
   [pukCount]="itemImage.puk"
   [pukModel]="itemImage.selectedPuk"
   [pukImageHeight]="'90px'"
   [pukImageWidth]="'90px'"
   [pukEmptyImage]="'http://simpleicon.com/wp-content/uploads/sad.png'"
   [pukFullImage]="'src/images/smile.svg'"
   (pukClick)="pukChangeImage($event)"
   (pukHover)="pukHover($event)">
</puk-rating>

<p class="text">{{itemHover}} puk selected when hover item</p>
```

## License

Licensed under the MIT license
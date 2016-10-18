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


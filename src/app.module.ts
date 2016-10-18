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
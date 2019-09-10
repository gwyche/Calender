import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { DayComponent } from './day/day.component';
import { MonthComponent } from './month/month.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DayComponent,
    MonthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonthComponent } from './month/month.component';
import { DayComponent } from './day/day.component';
import { MapComponent } from './map/map.component';


const routes: Routes = [
  {path: 'month', component: MonthComponent},
  {path: 'day', component: DayComponent},
  {path: 'map', component: MapComponent},
  {path: '', component: MonthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

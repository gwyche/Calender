import { Injectable } from '@angular/core';
import { day_data } from './month/day_data';
import { month_data } from './month/month_data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class DayDataService {

  current_day: day_data;

  constructor() { 

    var tempday = new day_data;
    this.current_day = tempday;
    
  }


  getCurrentDay(): day_data{
    return this.current_day;
  }

}
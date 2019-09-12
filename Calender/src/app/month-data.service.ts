import { Injectable } from '@angular/core';
import { month_data } from './month/month_data';
import { day_data } from './month/day_data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class MonthDataService {

  current_month: month_data;

  constructor() { 
    
    var tempMonth = new month_data;
    this.current_month = tempMonth;
  
  }


  getCurrentMonth(): month_data{
    return this.current_month;
  }

}

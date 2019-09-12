import { Component, OnInit } from '@angular/core';
import { day_data } from './day_data';
import { MonthDataService} from '../month-data.service';
import { month_data } from './month_data';
import { DayDataService } from '../day-data.service';


@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {

  month: month_data;

  //Inject a month-data.service
  constructor(private month_service: MonthDataService, private day_service: DayDataService){}



  onSubmit(){
  }



  ngOnInit() {
    this.month = this.month_service.getCurrentMonth();
  }

}

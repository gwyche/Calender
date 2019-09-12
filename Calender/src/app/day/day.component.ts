import { Component, OnInit } from '@angular/core';
import { day_data } from '../month/day_data';
import { MonthDataService} from '../month-data.service';
import { month_data } from '../month/month_data';
import { DayDataService } from '../day-data.service';


@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  todaySettings: day_data;

  
  constructor(private month_service: MonthDataService, private day_service: DayDataService) { }

  getTodayFromService(): day_data{
    var tempday = new day_data;
    tempday = this.day_service.getCurrentDay();
    this.todaySettings = tempday;
    return 
  }

  //Ob submission, content of bound day_data object is added to day_data object in service singleton
  onSubmit(){
    this.day_service.current_day.setAssigned();
    this.day_service.current_day.setPurpose(this.todaySettings.getPurpose());
    this.day_service.current_day.setTime(this.todaySettings.getTime);
    this.day_service.current_day.setTravelTime(this.todaySettings.getTravelTime());
    this.day_service.current_day.setNotes(this.todaySettings.getNotes());
  }



  ngOnInit() {
    this.getTodayFromService();
  }

}

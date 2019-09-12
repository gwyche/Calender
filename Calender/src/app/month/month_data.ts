import { day_data } from './day_data';

export class month_data{

    //Parameters/////////////
    startNumber: number; //Element of the first day of the month
    dayList: day_data[];  //Array of all possible days




    //No arg contructor//////
    constructor(){
        this.startNumber = 0;  //Sets the first day of the month
    }


    //Getters////////////////////
    getStartNumber(): number{
        return this.startNumber;
    }

    getDayList(): day_data[]{
        return this.dayList;
    }

    //Setters////////////////////
    setStartNumber(input: number): void{
        this.startNumber = input;
    }

    addAppointment(input: day_data, date: number): void{
        this.dayList[date + this.startNumber] = input;
        this.dayList[date + this.startNumber].setAssigned();
    }

    //OTHER METHOD TYPES
    //Populate all elements in dayList with day_data objects
    populateMonth(): void{
        for(let i = 0; i < 35; i++){
            let day = new day_data();
            this.dayList[i] = day;
        }
    }

    locateAppts(): boolean[]{
        var date_array: boolean[];
        for(let i = 0; i < 35; i++){
          if(this.dayList[i].assigned == true){
            date_array[i] = true;
          }
        }
        return date_array;
    }




}
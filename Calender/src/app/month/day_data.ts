
export class day_data{

    //Parameters/////////////
    id: number;
    purpose: string = "";
    time: number;
    travel_time: number;
    notes: string = "";

    //No arg contructor//////
    constructor(){}


    //Getters////////////////
    getID(): number{
        return this.id;
    }

    getPurpose(): string{
        return this.purpose;
    }

    getTime(): number{
        return this.time;
    }

    getTravelTime(): number{
        return this.travel_time;
    }

    getNotes(): string{
        return this.notes;
    }



    //Setters////////////////
    setID(input): void{
        this.id = input;
    }

    setPurpose(input): void{
        this.purpose = input;
    }

    setTime(input): void{
        this.time = input;
    }

    setTravelTime(input): void{
        this.travel_time= input;
    }

    setNotes(input): void{
        this.notes = input;
    }



}
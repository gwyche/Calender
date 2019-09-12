
export class day_data{

    //Parameters/////////////
    id: number = 0;
    purpose: string = "";
    time: number = 0;
    travel_time: number;
    notes: string = "";
    assigned: boolean = false;

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

    getAssigned(): boolean{
        return this.assigned;
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

    setAssigned(): void{
        this.assigned = true;
    }



}
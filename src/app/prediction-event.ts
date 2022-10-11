
//TODO: If you would like to expose additional data from the handtracker component,
//extend this class with additional properties.

export class PredictionEvent {
    prediction: string = "None";
    full_info: string = "N/A";
    bounding_box: number[] = [];

    constructor(prediction:string, full_info:string, bounding_box: number[]){
        this.prediction = prediction;
        this.full_info = full_info;
        this.bounding_box = bounding_box;
    }

    public getPrediction(){
        return this.prediction;
    }

    public getAllInfo(){
        return this.full_info;
    }

    public getBbox(){
        return this.bounding_box;
    }
}


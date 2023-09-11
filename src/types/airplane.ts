export type Caterer = {
    name: string,
    address: string,
    phone: number
}
export type Airplane = {
    model: string,
    flightNumber: string,
    timeOfDeparture: Date,
    timeOfArrival: Date,
    caterer: Caterer
}


export const airplaneHtml = (airplane: Airplane): string => {
    let html: string;
    html = "<p><h1>" + airplane.flightNumber + "</h1></p>"
        + "<p>"
        + "The flight is of model " + airplane.model + " and it takes off at " + airplane.timeOfDeparture + ", finally landing at " + airplane.timeOfArrival + "."
        + "Thus, the flight takes " + getTravelTime(airplane) + " hours."
        + "</p>"
        + "<p>"
        + getCatererText(airplane.caterer)
        + "</p>"
    return html;
}

const getTravelTime = (airplane: Airplane): number => {
    return Math.abs(airplane.timeOfArrival.getTime() - airplane.timeOfDeparture.getTime()) / 3600000;
}

const getCatererText = (caterer: Caterer): string => {
    return "Your proud caterers are " + caterer.name + " with headquarters located at " + caterer.address + ". You can contact them at " + caterer.phone + ".";
}
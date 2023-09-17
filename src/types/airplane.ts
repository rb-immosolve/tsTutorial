export interface Caterer {
  name: string
  address: string
  phone: number
}
export interface Airplane {
  model: string
  flightNumber: string
  timeOfDeparture: Date
  timeOfArrival: Date
  caterer: Caterer[]
}

export const airplaneHtml = (airplane: Airplane): string => {
  const html: string = `<p><h1>${airplane.flightNumber}</h1></p>` +
        `<p>The flight is of model ${airplane.model} and it takes off at ${airplane.timeOfDeparture.toDateString()}` +
        `, finally landing at ${airplane.timeOfArrival.toDateString()}.Thus, the flight takes ${getTravelTime(airplane)} hours.` +
        `</p><p>${getCatererText(airplane.caterer)}</p>`
  return html
}

const getTravelTime = (airplane: Airplane): number => {
  return Math.abs(airplane.timeOfArrival.getTime() - airplane.timeOfDeparture.getTime()) / 3600000
}

const getCatererText = (caterer: Caterer[]): string => {
  let fString: string = ''
  for (let i = 0; i < caterer.length; i++) {
    fString += `Your proud caterers are ${caterer[i].name} with headquarters located at ${caterer[i].address}` +
    `You can contact them at ${caterer[i].phone}.`
  }
  return fString
}

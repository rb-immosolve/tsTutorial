import { Airplane, airplaneHtml } from "./types/airplane"
import { Menu, printMenu } from "./types/menu"

const airplane: Airplane = {
    model: "Airbus A380",
    flightNumber: "A2201",
    timeOfDeparture: new Date(),
    timeOfArrival: new Date(),
    caterer: {
        name: "Special Food Ltd",
        address: "484, Some Street, New York",
        phone: 1452125
    }
}

const menu: Menu[] = [
    { name: "Pizza", cost: 100, chef: "Pizza Chef" },
    { name: "Burger", cost: 100, chef: "Burger Chef" },
    { name: "French Fries", cost: 100 },
    { name: "Hot Dog", cost: 100 },
]

console.log(airplaneHtml(airplane));
console.log(printMenu(menu));
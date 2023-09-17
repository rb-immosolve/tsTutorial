import { type Airplane, airplaneHtml } from './types/airplane'
import { type Menu, printMenu } from './types/menu'
import { printArray, findInArray } from './types/test'

const airplane: Airplane = {
  model: 'Airbus A380',
  flightNumber: 'A2201',
  timeOfDeparture: new Date(),
  timeOfArrival: new Date(),
  caterer: [
    {
      name: 'Special Food Ltd',
      address: '484, Some Street, New York',
      phone: 1452125
    },
    {
      name: 'No Vegetarians Co.',
      address: 'Meatsville, Texas',
      phone: 999225
    }
  ]
}

const menu: Menu[] = [
  { name: 'Pizza', cost: 100, chef: 'Pizza Chef' },
  { name: 'Burger', cost: 100, chef: 'Burger Chef' },
  { name: 'French Fries', cost: 100 },
  { name: 'Hot Dog', cost: 100 }
]

printMenu(menu)
console.log(airplaneHtml(airplane))
printArray()
console.log(findInArray('Sara'))
console.log(findInArray('Menyew'))

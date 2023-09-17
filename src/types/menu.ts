export interface Menu {
  name: string
  cost: number
  chef?: string
}

export function printMenu (menu: Menu[]): void {
  menu.forEach((item) => {
    let string = 'Menu has item : ' + item.name + ' with cost : ' + item.cost
    if (item.chef != null) {
      string = string + ' prepared by chef : ' + item.chef
    }
    console.log(string)
  })
}

const objArray: any[] = [
  { name: 'Rahul', age: 32 },
  { name: 'Sara', age: 19 }
]

export function printArray (): void {
  objArray.forEach(
    (elem) => { console.log(elem) }
  )
}

export function findInArray (searchName: string): { name: string, age: number } {
  return objArray.find(
    (elem) => elem.name === searchName
  )
}

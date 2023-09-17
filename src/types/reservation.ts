interface Reservation {
  departureDate: Date
  returnDate?: Date
  source: string
  destination: string
}

interface Reserve {
  (
    departureDate: Date,
    source: string,
    destination: string,
    returnDate: Date
  ): Reservation
  (
    departureDate: Date,
    source: string,
    destination: string
  ): Reservation
}

const reserve: Reserve = (departureDate: Date, source: string, destination: string, returnDate?: Date): Reservation => {
  const r: Reservation = {
    departureDate,
    source,
    destination
  }
  if (returnDate !== null) {
    r.returnDate = returnDate
  }
  return r
}

console.log(reserve)

class captains {
    constructor(name, age, flighHours) {
        this.name = name
        this.age = age
        this.flighHours = flighHours
    }
}

class spaceship {
    constructor(name, novaquantidade, capName, captaainAge, captainFlighHours) {
        this.name = name
        this.novaquantidade = novaquantidade
        this.captain = new captain(capName, captaainAge, captainFlighHours)
    }
}

let spaceship = new spaceship('artems', 13, 'wil grey', 45, 15000)

console.log(spaceship)
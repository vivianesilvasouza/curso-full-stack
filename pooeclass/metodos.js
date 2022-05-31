class spaceship {
    constructor(name) {
        this.name = name
        this.velocity = 0
    }

    speeUp(acceleration) {
        this.velocity += acceleration
    }
}

let artemis = new spaceship('artemis')

console.log(artemis)

artemis.speeUp(10)
artemis.speeUp(15)

console.log(artemis)



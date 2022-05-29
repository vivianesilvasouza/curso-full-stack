let spaceShip = {
    name: 'demeter',
    type: 'extração',
    max: 20,
    turnon: function () {
        alert('preparando propulsão')
        alert('ligando computador de bordo')
    }
}
/* spaceShip.turnon() */
spaceShip.velocity = 0
spaceShip.speeUp = function (acceleration) {
    this.velocity += acceleration
}

console.log(spaceShip)
spaceShip.speeUp(10)
console.log(spaceShip)
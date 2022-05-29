function doubleVelocity(velocity, printer) {
    let deceleration = 20

    while (velocity > 0) {
        printer(velocity)
        velocity -= deceleration
    }

    alert('nave parada. comportas podem ser abertas.')


}

let spaceVelocity = 150

slowDown(spaceVelocity, function (velocity) {
    console.log('velocidade atual: ' + velocity)
})
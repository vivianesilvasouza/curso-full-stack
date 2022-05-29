function doubleVelocity(velocity, printer) {
    console.log('entrei em doublevelocity')
    let newVelocity = velocity * 2
    printer(newVelocity)
    return newVelocity
}

/* let printVelocity = velocity => {
    console.log('nova velocidade: ' + velocity + 'km/s')
}

let newVelocity = doubleVelocity(60, printVelocity)
console.log(newVelocity) */

let anotheVelocity = doubleVelocity(50, velocity => {
    console.log('outra velocidade:' + velocity)
})
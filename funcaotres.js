function spedUp(velocity, aceleration) {
    let newVelocity = velocity + aceleration
    console.log('nova velocidade' + newVelocity)
    return newVelocity
}

let velocity = 80
let aceleration = 5
console.log(velocity)

velocity = spedUp(velocity, aceleration)
console.log(velocity)
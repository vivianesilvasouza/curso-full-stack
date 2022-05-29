/* let spaceshipName = 'Supernova'

function changeSpaceName() {
    spaceshipName = 'Elemental'
}
console.log(spaceshipName)
changeSpaceName()
console.log(spaceshipName) */

/* function startceshipVelocity() {
    let spaceshipVelocity = 0
}
startceshipVelocity
console.log(spaceshipVelocity)  */// por mais que eu esteja chamando a variavel, ele não pode ser chamada pois está sendo local dentro da função

function setSpaceshipDeteils() {
    let velocity = 50
    if (velocity == 50) {
        velocity = 60
        var spaceshipName = 'elemental'
        let spaceshiptype = 'discovery'
    }

    console.log(velocity)
    console.log(spaceshipName)
    console.log(spaceshiptype)
}
setSpaceshipDeteils()
/* let hitChedSpacehip = ['demeter', 'darwin', 'supernova', 'fenix', 'puller']


hitChedSpacehip.forEach(function (currentSpaceship, index) {
    console.log('Nave: ' + currentSpaceship + '\nIndice:' + index)
}) */

///////////////////////////////////////////////////////////////////////


/* let hitChedSpacehip = ['demeter', 'darwin', 'supernova', 'fenix', 'puller']

let upcaseSpaceShip = hitChedSpacehip.map(function (currentSpaceship) {
    let upcased = currentSpaceship.toUpperCase()
    return upcased
})

console.log(upcaseSpaceShip) */

/////////////////////////////////////////////////////////////////////////////////

/* let hitChedSpacehip = ['demeter', 'darwin', 'supernova', 'fenix', 'puller']

let with7Chars = hitChedSpacehip.filter(element => { return element.length >= 7 })

console.log(with7Chars) */

///////////////////////////////////////////////////////////////////////////////

let hitChedSpacehip = ['demeter', 'darwin', 'supernova', 'fenix', 'puller']

let with7Chars = hitChedSpacehip.find(element => { return element.length >= 7 })

console.log(with7Chars)




/* let velocity = 50
let acceleration = 5

while (velocity <= 100) {
    console.log('Acelerando: Estamos a ' + velocity + 'km/s')
    velocity += acceleration //velocity = velocity = acceleration 
} */

let constellation = 'Andromeda'
let pos = 0
let cosntelationLergth = constellation.length

while (pos < cosntelationLergth) {
    if (constellation[pos] == 'a' || constellation[pos] == 'A') {
        console.log(pos)
    }
}
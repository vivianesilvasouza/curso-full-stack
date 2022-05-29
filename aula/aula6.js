/* let velocity = 80

switch(velocity * 2) {
    case 100:
        console.log('Sua velocidade é 100km/s')
    break
    case 160:
        console.log('sua velocidade é 160km/s')
    break
    default:
        console.log('velocidade não indenficada')
} */

/* let spaceship = 'elemental' */

/* switch (spaceship) {
    case "golias":
        console.log('nave mais resistente')
        break
    case 'raptor':
        console.log('nave mais rápida')
        break
    case 'enterprise':
        console.log('nave a frota estelar')
        break
    default:
        console.log('nave comun')
} */

let velocity = 90

switch (velocity) {
    case 80:
    case 90:
    case 100:
        console.log('velocidade aceitável')
        break
    case 110:
        console.log('velocidade alta, mas aceitável')
        break
    default:
        console.log('velocidade não indentificada')
}
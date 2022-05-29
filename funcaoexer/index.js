let spaceshipName = prompt('digite o nome da sua nave')
let spaceshiVelocity = 0
let chosenOption

function showMenu() {
    let option
    while (option != '1' && option != '2' && '3' && option != '4') {
        option = prompt('o que deseja fazer?\n' +
            '1- acelerar a nave em 5km/s\n' +
            '2- desacelerar a nave em 5 km/s\n' +
            '3 imprimit dados de bordo' +
            ' sair de programa ')
    }
    return option
}
function speedUp(velocity) {
    let newvelocity = velocity + 5
    return newvelocity
}

function slowDouwn(velocity) {
    let newvelocity = velocity - 5
    if (newvelocity < 0)
        return newvelocity
}

function printspaceship(name, velocity) {
    alert('espaçonave' + name + '\nvelocidade:' + velocity + 'km/s')
}

do {
    chosenOption = showMenu()
    switch (chosenOption) {
        case '1':
            spaceshiVelocity = speedUp(spaceshiVelocity)
            break
        case '2':
            spaceshiVelocity = slowDouwn(spaceshiVelocity)
            break
        case '3':
            printspaceship(spaceshipName, spaceshiVelocity)
            break
        default:
            alert('encerrando o programa de bordo')
    } while (chosenOption != '4')
let spaceShip = {
    velocty: 0,
    speeUp: function (acceleration) {
        this.velocty += acceleration
    }
}

function registerSpaceship() {
    spaceShip.name = prompt('informe o nome da nave')
    spaceShip.typ = prompt('informe o tipo da nave')
    spaceShip.maxValocity = Number(prompt('informe a velocidade máxima da nave (km/s'))
}

function acceleration() {
    let acceleration = Number(prompt('quanto você quer acelerar (km/s)'))
    spaceShip.speeUp(acceleration)
    if (spaceShip.velocty > spaceShip.maxValocity) {
        alert('velocidade máxima ultrapassada!' +
            '\nVelocidade: ' + spaceShip.velocty + 'km/s' + 'velocidade máxima da nave: ' +
            'km/s')
    }
}

function stop() {
    alert('nome: ' + spaceShip.name + '\nTipo: ' + spaceShip.type + '\nVelocidade da nave: ' +
        + spaceShip.velocty + "\nMáxima da Nave: " + spaceShip.maxValocity)
    spaceShip.velocty = 0
}

function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt('você deseja: \n1- Acelerar\n2- Parar')
        switch (chosenOption) {
            case '1':
                acceleration()
                break
            case '2':
                stop()
                break
            default:
                alert('opção inválida')
        }
    } while (chosenOption != '2')
}

registerSpaceship()
showMenu()
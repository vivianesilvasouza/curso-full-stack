class spaceship {
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.isHitched = false //informar se a nave está engatada
        this.entraceDoorsOpen = false //informar se todas as portas esão fechadas
    }

    hitch() { // metdo que será chamado quando a nave for ligada
        this.isHitched = true
        this.entraceDoorsOpen = true
    }
}

function showMenu() {
    let chosenOption
    while (chosenOption != '1' && chosenOption != '2' && chosenOption != '3') {

        chosenOption = prompt('oque deseja fazer?\n' +
            '1 - engatar a nave\n' +
            '2 - imprimir naves\n' +
            '3 - sair do programa')
        return chosenOption
    }
}

function createSpaceship() {
    let spaceshipName = prompt('informe o nome da nave')
    let crewQuantity = prompt('informe a quantidade de tripulantes')
    let spaceship = new spaceship(spaceshipName, crewQuantity)
    return spaceship
}

function printSpaceshipList(spaceship) {
    let SpaceshipList = ''
    spaceship.forEach((spaceship, index) => {
        SpaceshipList += (index + 1) + '-' + spaceship.name + '(' + spaceship.createSpaceship + 'tripulantes)\n'
    })
    alert(SpaceshipList)
}


let hitChedSpaceship = [] // lista de naves que estão ligada 
let chosenOption

while (chosenOption != '3') {
    chosenOption = showMenu()
    switch (chosenOption) {
        case '1':
            let spaceshipToAdd = createSpaceship()
            spaceshipToAdd.hitch()
            hitChedSpaceship.push(spaceshipToAdd)
            break
        case '2':
            printSpaceshipList(hitChedSpaceship)
            break
    }

}
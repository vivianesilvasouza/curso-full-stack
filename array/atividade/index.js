const hitChedSpaceships = [
    ['fenix', 8, true],
    ['golias', 10, true],
    ['helmet', 5, false],
    ['elemental', 3, true],
    ['darwin', 15, false]
]

let crewGreaterThan = hitChedSpaceships.filter(spachip => {
    return spachip[1] > 9
}).map(spachip => {
    return spachip[0]
})

let ongoiHitPlatform = hitChedSpaceships.findIndex(spachip => {
    return spachip[2] == false
})

let highSpaceShip = hitChedSpaceships.map(spachip => {
    return spachip[0].toUpperCase()
})

let message = 'espaçonaves com mais de 9 tripulantes: ' + crewGreaterThan.join(',')
message += '\nPlataforma com processo de engate: ' + (ongoiHitPlatform + 1)
message += '\nEspaçonaves destacada: ' + highSpaceShip.join(',')

alert(message)
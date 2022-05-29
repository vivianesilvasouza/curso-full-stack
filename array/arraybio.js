/* let hitChedSpacehip = [['elemental', 7], ['helmet', 13], ['golias', 5], ['supernova', 10]]

hitChedSpacehip.push(['colussiu', 8])

console.log(hitChedSpacehip) */

/* let hitChedSpacehip = [['elemental', 7], ['helmet', 13], ['golias', 5], ['supernova', 10]]


console.log(hitChedSpacehip[3][1]) */

/* let discoverySpaceships = ["Elemental", "Darwin", "Ártemis"]

let battleSpaceships = ["Fenix", "Golias", "Helmet"]

let extractionSpaceships = ["Deméter", "Puller"]



let randomSpaceships = [

    discoverySpaceships.indexOf("Elemental"),

    battleSpaceships.indexOf("Helmet"),

    extractionSpaceships.indexOf("Puller")

]

console.log(randomSpaceships) */

let spaceshipsList = ["Colossus", "Helmet", ["Fenix", "Revivor"], "Supernova"]

spaceshipsList.pop()

spaceshipsList.pop()

spaceshipsList.push("Elemental")

spaceshipsList.unshift("Eagle")

spaceshipsList.shift()

spaceshipsList.unshift("")

console.log(spaceshipsList)
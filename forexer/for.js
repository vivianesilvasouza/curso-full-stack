let spaceship = prompt('qual nome da nave?')
let chartoreplave = prompt('qual caracter você deseja substituir?')
let reaplacetchar = prompt('por qual caracter você deseja substituir')
let nawspaceship = ''

for (let pos = 0; pos < spaceship.length; pos++) {
    if (spaceship[pos] == chartoreplave) {
        nawspaceship += reaplacetchar
    } else {
        nawspaceship += spaceship[pos]
    }
}
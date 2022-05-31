/* class spaceship {
    constructor(name, plataform) {
        this.name = name
        this.plataform = plataform
    }
}

let observatoty = new spaceship('observatório', 40)

console.log(observatoty) */

class spaceship {
    constructor(myname, type = 'descoberta') {
        this.name = myname
        this.type = type
    }
}

let darwin = new spaceship('darvin')
let helmet = new spaceship('helmet', 'batalha')

console.log(darwin)
console.log(helmet)
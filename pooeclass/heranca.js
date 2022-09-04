class spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity) {
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0
    }

    speeUp(acceleration) {
        this.currentVelocity += acceleration
        if (this.currentVelocity > this.maxRecommendedVelocity) {
            alert('VELOCIDADE MÁXIMA ULTRAPASSADA!!\nDiminua ou poderá provocar danos a nave.')
        }
    }
}

class BatteleSpaceship extends spaceship {
    stop() {
        this.currentVelocity = 0
        alert('Recolhendo armas e parando nave de batalha ')
    }
}

class discoverySpaceship extends spaceship {
    stop() {
        this.currentVelocity = 0
        alert('recolhendo equipamentos de amostras e parando nave de descoberta.')
    }
}

let darwin = new discoverySpaceship('darwin', 10, 20)
let fenix = new BatteleSpaceship('fenix', 8, 240)

darwin.speeUp(210)
fenix.speeUp(230)
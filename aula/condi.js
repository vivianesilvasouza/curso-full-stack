let velocity = 110

if (velocity < 40) {
    console.log('estamos numa velocidade aceitável ')
} else if (velocity <= 100) {
    console.log('cuidado! próximo a velocidade de risco!')
} else {
    console.log('velocidade de Risco!')
}

(velocity > 100) ? console.log("velocidade maior que 100") : console.log('velocidade menor que 100')
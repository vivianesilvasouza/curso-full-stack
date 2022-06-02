let namePiloto = prompt('qual o nome do piloto(a)?')
let velocidade = 0
let escolhervelo = prompt('quanto de velocidade você gostaria de acelerar a nave?')

let confirmar = confirm(`a velocidade foi acelerada para ${escolhervelo} km/s`)

if (confirmar) {
    velocidade = escolhervelo
}

if (velocidade <= 0) {
    alert('nave parada. aumente a velocidade');
} else if (velocidade <= 40) {
    alert('você está devagar, podemos aumentar mais');
} else if (velocidade <= 80) {
    alert('parece uma boa velocidade para manter');
} else if (velocidade <= 100) {
    alert('velocidade alta. Considere diminuir');
} else {
    alert('velocidade perigosa. controle automatico forçado.')
}

alert(`o nome do piloto(a) é: ${namePiloto} e a velocida da nave é ${escolhervelo} km/s`)
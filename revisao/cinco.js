
let comeco = 0
let nomeNave = prompt('qual é o nome da sua nave?')
let dobra = prompt('deseja entrar em dobra espacial?\n1.sim\n2.não')

while (dobra == 1) {
    comeco += 1
    dobra = prompt('deseja realizar a proxima dobra?\n1.sim\n2.não ')
}


alert(`o nome da nave é ${nomeNave} e o numero de tentativas vezes ${comeco}`)
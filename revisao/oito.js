
let nomeNave = prompt('qual nome da sua nave?')
let inicial = 0
let escola = prompt('qual velocidade deseja acelerar?\n1.Acelerar a nave em 5km/s.\n2.desacelerar a nave em 5km/s')


function menu() {
    switch (escola) {
        case '1':
            alert('subiu para 5')
            break
        case '2':
            alert('desalerou a nave em 5')
            break
        default:
            alert('opção inválida')

    }

}



menu()
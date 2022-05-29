let nomeNave = prompt('qual o nome da espaçonave?')
let inventer = ''

for (let i = nomeNave.length - 1; i >= 0; i--) {
    if (nomeNave[i] == 'e') {
        break
    }
    inventer += nomeNave[i]
}

alert('nome original da nave ' + nomeNave + '\nnome apos a ocultação: ' + inventer)
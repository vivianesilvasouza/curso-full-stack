let novanave = prompt('qual o nome da sua espaçonave?')
let trocacaracte = prompt('qual caractere que deseja trocas?')
let subicaracte = prompt('qual caractere que deseja substituir?')
let novonome = ''


for (let i = 0; i < novanave.length; i++) {
    if (novanave[i] == trocacaracte) {
        novonome += subicaracte
    } else {
        novonome += novanave[i]
    }

}

alert('o novo nome da sua espaçonave é ' + novonome)
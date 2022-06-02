let namevelha = prompt('qual o nome da pessoa mais velha?')
let velhaidade = prompt('qual a idade da pessoa mais velha? ')
let namenova = prompt('qual nome da pessoa mais nova? ')
let novaidade = prompt('qual a idade da pessoa mais nova?')

const comparacao = (velhaidade - novaidade)
alert(namevelha + ' tem ' + velhaidade + ' anos de idade')
alert(namenova + ' tem ' + novaidade + ' anos de idade')

alert(namevelha + ' é ' + comparacao + ' anos mais velho que ' + namenova)
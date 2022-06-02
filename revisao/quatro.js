/* let nomeFruta = 'maça'

switch (nomeFruta) {
    case 'maça':
        console.log('Não vendemos esta fruta aqui')
        break
    case 'kiwi':
        console.log('Estamos com escassez de kiwis')
        break
    case 'banana':
        console.log('Aqui está, são 3 reais o quilo')
        break
    default:
        console.log('você não escolheu nem uma opção!')

} */

let lista = prompt('qual modelo você gostaria de comprar ?\n1.hatch\n2.sedans\n3.motocicletas\n4.caminhonetes')

switch (lista) {
    case '1':
        alert(`você escolheu o modelo de carro hatch `)
        break
    case '2':
        alert('você escolheu o modelo de carro sedan ')
        break
    case '3':
        alert('você escolheu o modelo motocicleta')
        break
    case '4':
        alert('você escolheu o modelo caminhonete')
        break
    default:
        alert('você não escolheu nem um modelo')
}
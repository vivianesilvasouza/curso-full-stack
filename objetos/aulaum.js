let spaceShip = { // vc pode criar opjeto vazio também let spaceShip = new object() ou deixar as {} vazias
    name: 'Fenix',
    crewQuantity: 7,
    type: 'batalha'
}

/* console.log(spaceShip.type) */
/* 
console.log(spaceShip["name"]) */

spaceShip.isHitChed = false
spaceShip['shieldLevel'] = 100

console.log(spaceShip['isHitChed'])
console.log(spaceShip.shieldLevel)
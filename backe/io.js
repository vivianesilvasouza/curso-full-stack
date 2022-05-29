const process = require('process');

/* console.log(process.argv); */
console.log('digite seu nome:')
process.stdin.on('data', (keyboard) => {

    process.stdout.write(`texto do usuário:${keyboard}`);
    process.exit();
})

//process vc pode dar entrada para o usuario e write a saida do usuario 
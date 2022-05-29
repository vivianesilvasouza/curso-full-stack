const fs = require('fs');

///////////////////////////////////////////////////////////////////////////
//writeFile ele sobre escreve o arquivo inteiro 
/* fs.writeFile('test.txt', 'olá nodejs\n', err => {
    console.log(err)
})
 */
////////////////////////////////////////////////////////////////////////////
//appendFile ele colocar um conteudo a mais na frente
/* fs.appendFile('test.txt', 'olá nodejs\n', err => {
    console.log(err)
}) */
///////////////////////////////////////////////////////////////////////////////

//rename ele renomea o aruivo anterior 

/* fs.rename('test.txt', 'test2.txt', err => console.log(err)); */

/////////////////////////////////////////////////////////////////

//ele apaga o arquivo 
/* fs.unlink('test2.txt', err => console.log(err)); */

//ele mostra a pasta que vc está o caminho 

console.log(__dirname)


//aqui vc pode criar um novo arquivo no seu servidor--vc pode usar para guardar dados, manipular arquivos. 


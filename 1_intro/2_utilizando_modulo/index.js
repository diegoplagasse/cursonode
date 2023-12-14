//import 
const fs = require('fs') //file system

fs.readFile('arquivo.txt', 'utf8', (err, data) => {

    if(err){
        console.log(err)
    }

    console.log(data)

});

/**
 * 
var roupas = [
    {produto: 'Camisa', preco: 25, cor: 'Amarelo'},
    {produto: 'Calça', preco: 80, cor: 'Azul'},
    {produto: 'Jaqueta', preco: 100, cor: 'Preto'},
    {produto: 'Camiseta', preco: 15, cor: 'Rosa'},
    {produto: 'Calção', preco: 20, cor: 'Azul'},
];
var roupasAzuis = roupas.map((roupa) => {
    return roupa.cor === 'Azul';
});

console.log(roupasAzuis); // [false, true, false, false, true]
 */
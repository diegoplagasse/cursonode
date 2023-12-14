console.log('3 - tarefa 1')

let a = 10;
let b = 20;

console.log(a + b)
//fazendo os imports

const fs = require('fs')

fs.readFile('arquivo-tarefa.txt', 'utf-8', (err, data) => {

    if(err){
        console.log(err)
    }

    console.log(data)
    
});
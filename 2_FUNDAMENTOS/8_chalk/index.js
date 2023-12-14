const chalk = require("chalk")

const nota = 8

if(nota >= 7){
    console.log(chalk.green('Parabéns você está aprovado.'))
}else{
    console.log(chalk.black.bgRedBright('Parabéns você está reprovado.'))
}


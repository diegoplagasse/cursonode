const chalk = require("chalk")
const inquirer = require("inquirer")

    inquirer.prompt([
        { name: 'nome', message: 'Qual seu nome? ' },
        { name: 'idade', message: 'Qual a sua idade? ' },

    ])
    .then((answers) => { //obtem os dados do inquirer ANSWERS
        console.log(answers)
        
        console.log(chalk.bgYellow.black(`Nome: ${answers.nome}`))
        console.log(chalk.bgYellow.black(`Idade: ${answers.idade}`))

    })
    .catch(err => console.log(err))
const x = '10'

//checar se X é um número
if(!Number.isInteger(x)){
    throw new Error('O valor de X não é um número inteiro')
}

console.log('Continuando o código')

//naus de um valor


const x = 10
const y = 'Diego'
const z = ['1,2']


console.log(x,y,z)

//contagem de impressoes
console.count(`O valor de x é ${x}, teste`)
console.count(`O valor de x é ${x}, teste`)
console.count(`O valor de x é ${x}, teste`)
console.count(`O valor de x é ${x}, teste`)

//variavel entre string
console.log("O nome é %s, ele é programador", y)

//limpar o console
setTimeout(() => {
    console.clear()
}, 2000)
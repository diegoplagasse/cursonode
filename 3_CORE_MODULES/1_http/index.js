const http = require("http")

const port = 3000

const server = http.createServer((req, res) => {
    res.write('Ola mundo HTTP')

    res.end()
})

server.listen(port, () => {
    console.log(`Servidor inicializado na porta: ${port}`)
})
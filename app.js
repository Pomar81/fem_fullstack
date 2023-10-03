const http = require('node:http')
const fs = require('node:fs')
const PORT = 3000

const app = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'})
    fs.createReadStream('index.html').pipe(res)
} )

app.listen(PORT)
console.log(`Server starter on port ${PORT}`)



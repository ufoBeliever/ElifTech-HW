const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain'})
    res.end(`Server is running, method: ${req.method}`)
})

server.listen(3000,'localhost' , ()=>console.log('server is running...'))
const http = require('http')


http.createServer((req, res)=>{
    if(req.method==="GET"){
        res.writeHead(200, {'Content-Type':'text/plain'})
        res.end('Method: GET');
    }
    else if(req.method==="POST"){
        res.writeHead(200, {'Content-Type':'text/plain'})
        res.end('Method: POST');
    }
    else if(req.method==="PUT"){
        res.writeHead(200, {'Content-Type':'text/plain'})
        res.end('Method: PUT');
    }
    else if(req.method==="PATCH"){
        res.writeHead(200, {'Content-Type':'text/plain'})
        res.end('Method: PATCH');
    }
    else if(req.method==="DEL"){
        res.writeHead(200, {'Content-Type':'text/plain'})
        res.end('Method: DEL');
    }
    else {
        res.writeHead(200, {'Content-Type':'text/plain'})
        res.end(`Method: ${req.method}`);
    }
}).listen(5000)
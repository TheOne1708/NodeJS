const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('My first Web Page !!')
    }
    if(req.url === '/about'){
        res.end("A short story boii")
    }
    res.end(`
    <h1>Oops!<h1>
    <p> No web page found !! <p>
    <a href='/'>back home</a>`)
})

server.listen(5000)
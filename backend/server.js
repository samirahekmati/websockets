// use node's inbuilt native http module to set up a http server
const http = require('http'); 

// Step 1: Create an HTTP server:
// 1: create a HTTP web-server 2: implement basic error handling for our node process
const http_Server = http.createServer((req,res) =>{
    console.log("hello from htttp server")
    res.writeHead(200, {
        "access-control-allow-origin" : "*"
    })

    res.end("http is running")
})

// Start HTTP server on port 8080
http_Server.listen(8080, ()=>{
    console.log("The http server is listening on port 8080")
})



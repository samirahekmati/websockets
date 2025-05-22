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

// Step 2: Create a WebSocket server
//use node's websocket module to set up a websocket  server
const websocketServer = require('websocket').server;
// Create a WebSocket server and attach it to the HTTP server
const websocket = new websocketServer({
    httpServer: http_Server,
    autoAcceptConnections: false //you must call req.accept() manually to complete the handshake,or req.reject() to deny it.
})

function isOriginAllowed(origin){
return true
}
// websocket server is going to fire on three events: 1- request even 2- message event 3- close event

// listening to request event
websocket.on('request', (req)=>{
    if(!isOriginAllowed(req.origin)){
        req.reject(403, "you are not allowed.")//reject the handshake request from the client
        console.log("client request is rejected from origin" +req.origin)
    }

    //establish our websocket connection
    //insert this connection into an object
    const connection = req.accept();
    connection.send('connection established...') //this message will show in the browser console
    console.log('connection established and accepted.') //this log will show in the terminal

    connection.on('message', (message) => {
        if (message.type === 'utf8') {
            console.log('Received Message:', message.utf8Data);  // <--- You'll see it here
            connection.sendUTF(`You said: ${message.utf8Data}`);//this message will show in the browser console
        }
    });
})


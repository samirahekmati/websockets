# 🗣️ WebSocket Echo App
This is a simple WebSocket Echo App built using native browser APIs and a Node.js server. The app demonstrates how to establish a WebSocket connection and echo messages back to the user in real-time.

**💡 Features**
- Real-time communication using WebSockets

- Native WebSocket API (no external libraries on the client)

- Echoes back any message the user sends

- Built from scratch with Node.js and the websocket module

**🧠 Educational Purpose**
This project is meant to help you understand:

- The WebSocket handshake

- How persistent connections work

- Building real-time features without polling

- Using event-driven communication in JavaScript

Most developers opt to using the WebSocket API because it is native and built directly into browsers, eliminating the need for third-party libraries or workarounds.

In this project, I will demonostrate  how to use the WebSocket API to establish and manage WebSocket connections, handle messages, and implement real-time communication in a web applications.

📚 Technologies Used
- Node.js

- http (native module)

- websocket (npm package)

- Native WebSocket API in the browser

To establish in a new websocket connestion you need to: 

- create a websocket object both in **client side and server side**(in this project i will be using native APIs)



# On the client side:
The broweser gives us access to Websocket API.It is a cinstructor function , so you need to use the new keywoerd. How to use the websocket API to return a client ws object:
```javascript
const ws = new Websocket(URL)
```
URL : tells the client where to send the request to(on which server do you want that ws connection establsihed)

when new Websocket(url) is called, the connetsion starts immediately. This means TCP handshake and HTTP upgrade handshake have been done automatically by callking this object.
Inother words, you don’t need to manually send an HTTP request from the client when establishing a WebSocket connection. However, under the hood, the WebSocket handshake does begin as an HTTP request, but this is handled automatically when you use the WebSocket constructor in JavaScript.

```javascript
const socket = new WebSocket("ws://localhost:3000");
```
When this runs:

- The browser sends an HTTP GET request with an Upgrade: websocket header.

- If the server accepts it, it responds with 101 Switching Protocols.

- From there, the connection is “upgraded” to a WebSocket, and both client and server start communicating over the WebSocket protocol.

- 🔁 After that, the connection is persistent, and you use .send() and .onmessage to communicate.

# The Websocket object is an event-based API, so we listen for events

Since we are no longer using http requests, everything is event based, that removes the need for short/long polling


# On the server side:
The server listens for WebSocket connections and echoes back any received message:
For this project I will be creating a WebsSocket server from scratch, using Node.js

In order to do this, I will be creating a HTTP web server(Websockets listen on the same port as HTTP), and then I will be usinf the websockets module to mount it to the HTTP server

**Install dependencies:**

npm is used to install the websocket module, creating a package.json file and to install the node_modules folder into this project directory.

```javascript
npm install websocket
```

This will:

- Add the websocket module to your node_modules

- Create a package-lock.json file

- Update your package.json if one exists





What type of server do we need in order to use websockets?
we need a webserver, and node is very well suited to do that.
for this projct we need to import native http module and third party ws modules. Native means that we dont need to download them they come with node.js


**step 1: create a http server**

to create a http server we import http modules first:
```javascript
const http = require('http')
```
All node servers require a web server oject at some point.

```javascript
const httpServer = http.createServer((req,res) =>{
    
})
```

**step 2: create a websocket server and attach it to the http server**

We use websocket module to set up a websocket server:

```javascript
const websocketServer = require('websocket').server;
const websocket = new websocketServer({
    httpServer: http_Server
})
```

# WebSockets on the server
To use WebSockets, both the client (like a browser) and the server need to implement and understand the rules of the WebSocket protocol.

Traditionally, the client (a web browser) initiates a WebSocket connection by sending a special HTTP/1.1 request to the server with required headers.

This request asks the server to "upgrade" the connection from HTTP to WebSocket. If the server supports WebSockets and allows the connection, it responds with a special HTTP response indicating that the connection has been upgraded (remember the 101 Switching Protocol status code).

From this point on, the client and server can send messages back and forth using the WebSocket protocol.

# APIs
The client uses the WebSocket API (defined by WHATWG ) to create a WebSocket object, send messages, and handle incoming messages.

But the server also needs to implement the WebSocket protocol to understand the messages it receives and send responses back to the client.

"How do servers implement the WebSocket protocol?" 

The answer is not easy, because different servers use different libraries and modules (APIs) to achieve this.

Of course, one solution is to build your own WebSocket module (server-side) from scratch. But this is a lot of work and as the adage goes "why reinvent the wheel"?

Unlike browsers, there is NOT one large organization like WHATWG that tells servers what to do. Instead, code is written by many different people for many different servers.

For example, some of the most popular server WebSocket APIs are:

ws or Socket.IO for Node.js servers. As you've just seen in the previous lectures, I used the websocket module.

faye-websocket for Ruby and Node

Elephant.io for PHP

Flask-SocketIO for Flask / Python

etc ...

IN SUMMARY
The client initiates a WebSocket connection, but the server has to understand and respond by also using the WebSocket protocol.

The WebSocket API is specifically for browsers.

Most servers today have their own WebSocket modules/libraries that also follow the rules defined in the WebSocket protocol.




# Interfaces

**A collection of methodes and properties that you(or your API) have access to.**

When using the Websocket API, you will work with 3 main interfaces:
- Websocket
- CloseEvent
- MessageEvent


# 📄 License
This project is open source and free to use for educational purposes.

# ✍️ Author
**Built with ❤️ by Samira**
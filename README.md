# The WebSocket API

Most developers opt to using the WebSocket API because it is native and built directly into browsers, eliminating the need for third-party libraries or workarounds.

In this project, I demonostrate  how to use the WebSocket API to establish and manage WebSocket connections, handle messages, and implement real-time communication in a web applications.

To establish in a new websocket connestion you need to: 

- create a websocket object both in client side and server side(in this project i will be using native APIs)

**on the client side:**
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
// DOM elements 
const openWsButton = document.getElementById("open_ws_connection")
const form = document.getElementById("form");

// handle event for open ws button 
openWsButton.addEventListener('click', (e) =>{
    console.log("open ws button is clicked.")
    form.style.display = "block"
   // Create WebSocket connection.
//    The browser sends an HTTP upgrade request to the server saying:
// “I’d like to upgrade this connection to WebSocket.”
const socket = new WebSocket("ws://127.0.0.1:8080");

// Connection opened
socket.addEventListener("open", (event) => { //Registers a callback function to run once the WebSocket connection is successfully established.
  socket.send("Hello Server!");//Sends the message "Hello Server!" to the server immediately after the connection is open.
});

// Listen for messages
socket.addEventListener("message", (event) => {
  console.log("Message from server ", event.data); //message: connection established
});
    
})


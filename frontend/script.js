// DOM elements 
const openWsButton = document.getElementById("open_ws_connection")
const form = document.getElementById("form");

// handle event for open ws button 
openWsButton.addEventListener('click', (e) =>{
    console.log("open ws button is clicked.")
    form.style.display = "block"
    const ws = new WebSocket("ws://127.0.0.1:3000")
    
})
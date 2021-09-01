//load the express module
let express = require("express");

let readline = require("readline");

//create the reference of express module
let app = express();

//load the http module and connect to express module with server property
let http = require("http").Server(app);

//load the socket io module and connect http module with IIFE features
let io = require('socket.io')(http);

let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

app.get("/",(request,response)=>{
    response.sendFile(__dirname+"\\index.html");
})

io.on("connection",(socket)=>{
    console.log("Client connected..");

    //recieve the msg from client
    socket.on("obj",(msg)=>{
        console.log(msg);
    })

    //send data
    socket.emit("obj1","Hello World");
    
    
    r1.emit("line",(input)=>{
        socket.emit(`Server Say:${input}`);
    })
    
})


//run the server using http module
http.listen(9090,()=>console.log("Server running on port number 9090"));
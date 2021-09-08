// load the express module 
let express = require("express");

// create the reference of epxress module 
let app = express();

// load the http module and connect to express module with Server property
let http = require("http").Server(app);

//load the mongoose module
let mongoose = require("mongoose");
let url = "mongodb://localhost:27017/tcsmean";
mongoose.pluralize(null); 

let chatSchema = mongoose.Schema({
    name:String,
    msgs:String
});

let chatModel = mongoose.model("Chatlog",chatSchema);


// load the socket.io module and connect http module 
// with IIFE features 
let io = require('socket.io')(http);

app.get("/",(request,response)=> {
    response.sendFile(__dirname+"\\socket.html");
})

io.on("connection",(socket)=> {
    console.log("Client connected");
    // receive the message from client application 
    socket.on("obj",(msg)=> {
        console.log(msg);
    })
    // sending data to client 
    socket.emit("obj1","Hello Client connected server...");

    //recieve the message from client
    socket.on("obj2",(msg,user)=>{
        //console.log(user+" says: "+msg);
        let msgChat = new chatModel({name:user,msgs:msg});
        console.log(msgChat);

        //storing in mongoDB
        chatModel.inserMany(msgChat,(err,result)=>{
            if(!err){
                //console.log(result);
                console.log("Message saved successfully");
            }else{
                //console.log(err);
                console.log("Message didn't save");
            }
        })
    })
})


// please run the server using http module not express module 
http.listen(9090,()=>console.log("Server running on port number 9090"));
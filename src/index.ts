import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port : 8080 });

wss.on("connection", function(socket){ //whenever the connection is established
    console.log("user connected") //the control will reach here
    // setInterval(()=>{//the server will send the messages
    //     socket.send("The current price of solana is " + Math.random());
    // }, 1000)

    //until we have seen, how the server is sending the messages. Now, we will see that 
    // how the client can send the message to the server

    socket.on("message", (e)=>{//e is the alias for the event
        if( e.toString() === "ping"){ //if server gets the message "ping"
            socket.send("pong");//then it will send "pong"
        }

        if( e.toString() ){ //if server gets the any message(string)
            socket.send(e.toString());//then it will send the exact string
            //which the client has sent to the server.
        }
    })

})
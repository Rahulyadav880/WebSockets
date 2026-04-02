import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", function (socket) {
    console.log("user connected"); //the control will reach here
    // setInterval(()=>{//the server will send the messages
    //     socket.send("The current price of solana is " + Math.random());
    // }, 1000)
    //until we have seen, how the server is sending the messages. Now, we will see that 
    // how the client can send the message to the server
    socket.on("message", (e) => {
        if (e.toString()) { //if server gets the message "ping"
            socket.send(e.toString()); //then it eill send "pong"
        }
    });
});
//# sourceMappingURL=index.js.map
import {  useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef(undefined);
  function sendMessage(){
    if(!socket){
      return;
    }
    const message = inputRef.current.value;
    //@ts-ignore
    socket.send(message)  
  }
  //the first thing to do is to establish a persistent connection(client->server)
//jab bhi pehli baar event mount ho(the very first render)
  useEffect(()=>{ //sabse pehle ek connection(persistent) connection banao
    const ws = new WebSocket("ws://localhost:8080") //created a persistent connection(client -> server)
    setSocket(ws); 
    ws.onmessage = (ev)=>{ // jab bhi wss(websocketserver) par msg aaye to 
      alert(ev.data) //client side par ek alert bhej de
    }
  }, [])

  return (
    <div>
      <input ref = {inputRef} type="text" placeholder="enter your message"></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App

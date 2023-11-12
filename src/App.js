import './App.css';
import React from "react";
import Incriment from './Incriment';
import Button from './Button';
import Button2 from './Button2';



function App() {
  let message1=<p>i love react,this is JSX element</p>
  let message2=React.createElement("p",null,'This is noraml react element without JSX')
  return (
    <div className="App">
      {message1}
      {message2}
      <h1>Hi sai welcome to React</h1>
        <h1 style={{fontStyle:"italic",fontFamily:"cursive"}}>lets make it react earns billions of money to pogula venkata sesha sai kumar </h1>
      <Incriment/><hr/>

      <Button name={"button1"}/><hr></hr>
      <Button2 buttonname={"button2"}/>
      
    </div>
  );
}

export default App;

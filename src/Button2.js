import React, { Component } from "react";

class Button2 extends Component{
   
    constructor(props){
        super(props);
     this.state={
        buttonname2:props.buttonname
     }
    }
    render(){ 
    return(
        <div>
            <p>This is button form class component</p>
            <button>{this.state.buttonname2}</button>
        </div>
        );
    }
   
}
export default Button2;
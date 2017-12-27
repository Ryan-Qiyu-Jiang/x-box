import React from "react";
import keyIndex from 'react-key-index';

import Message from "../components/Message";

export default class Messenger extends React.Component{
scrollToBottom() {
  this.messagesEnd.scrollIntoView({ behavior: "smooth" });
}

componentDidMount() {
  this.scrollToBottom();
}

componentDidUpdate() {
  this.scrollToBottom();
  console.log("*************messenger updated");
}

render(){
    //const output = keyIndex(this.props.messages, 1);
    const messages = this.props.messages.map((output,index)=><Message key={index} messageClass={output}/>);
   return(
    <div id="messenger">
        {messages}
        <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
    </div>
    );
}

}
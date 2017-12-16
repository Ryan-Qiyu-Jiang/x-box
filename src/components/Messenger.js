import React from "react";
import keyIndex from 'react-key-index';

import Message from "../components/Message";

export default class Messenger extends React.Component{
render(){
    //const output = keyIndex(this.props.messages, 1);
    const messages = this.props.messages.map((output,index)=><Message key={index} messageClass={output}/>);
   return(
    <div id="messenger">
        {messages}
    </div>
    );
}

}
import React from "react";

export default class Message extends React.Component{
render(){
	let color= (this.props.messageClass.sender=='user')? '#2D5F73' : 'yellow';
    // const loaderStyles = {
    //     'animation-duration': this.props.messageClass.delay+"s",
    //     'animation-fill-mode': none,
    // };

    // let messageStyleClass = 'hidden';
    // let loadingStyleClass = '';
    // var self = this;
    //     setTimeout(function() {
    //             loadingStyle='hide';
    //             messageStyleClass = (self.props.messageClass.sender=='user')? 'user-message' : 'my-message';
    //         }, 1000*self.props.messageClass.delay);
    //console.log(this.props.messageClass.delay);
    const delay=2*Math.random()+2;
    const showLaterstyles={
    "MozAnimation": "showLater 0s ease-in " + delay +"s forwards",
    /* Firefox */
    "WebkitAnimation": "showLater 0s ease-in " + delay + "s forwards",
    /* Safari and Chrome */
    "OAnimation": "showLater 0s ease-in " + delay +"s forwards",
    /* Opera */
    "animation": "showLater 0s ease-in " + delay + "s forwards"
            };
    const hideLaterstyles=(this.props.messageClass.sender=='user')? {}:{
    "MozAnimation": "hideLater "+ delay +"s ease-in 0s forwards",
    /* Firefox */
    "WebkitAnimation": "hideLater "+ delay +"s ease-in 0s forwards",
    /* Safari and Chrome */
    "OAnimation": "hideLater "+ delay +"s ease-in 0s forwards",
    /* Opera */
    "animation": "hideLater "+ delay +"s ease-in 0s forwards"
            };


    const messageStyleClass = (this.props.messageClass.sender=='user')? 'user-message' : 'my-message showMe';
    const indicatorStyleClass = (this.props.messageClass.sender=='user')? 'wrapper-hide' : 'hideMe';
  //  let messageStyleClass = (this.props.messageClass.sender=='user')? 'user-message' : 'my-message';

   return(
   	<div class="col-12 message-wrapper">
        <div class={indicatorStyleClass} style={hideLaterstyles}>
            <div class="message my-message typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
        <div class={"message "+messageStyleClass} style={showLaterstyles} >
            {this.props.messageClass.text}
        </div>
    </div>
    );
}

}
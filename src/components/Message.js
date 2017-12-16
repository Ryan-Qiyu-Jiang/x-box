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
    const delay=2*Math.random();
            const styles={
    "-moz-animation": "showLater 0s ease-in " + 1 +"s forwards",
    /* Firefox */
    "-webkit-animation": "showLater 0s ease-in " +1+ "s forwards",
    /* Safari and Chrome */
    "-o-animation": "showLater 0s ease-in " +1+"s forwards",
    /* Opera */
    "animation": "showLater 0s ease-in " +1+ "s forwards"
            };

              const messageStyleClass = (this.props.messageClass.sender=='user')? 'user-message' : 'my-message showMe';
  //  let messageStyleClass = (this.props.messageClass.sender=='user')? 'user-message' : 'my-message';

   return(
   	<div class="col-12 message-wrapper">
    <div class={"message "+messageStyleClass} style={styles} >
        {this.props.messageClass.text}
    </div>
    </div>
    );
}

}
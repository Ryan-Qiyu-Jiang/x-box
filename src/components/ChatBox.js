import React from "react";

export default class ChatBox extends React.Component{
	render(){
	const key=this.props.index;
	const chat_color= (key%2==0)?"chat grey":"chat pink";
	const chat_triangle=(key%2==0)?"chat_left_triangle":"chat_right_triangle";
		return(
							<div class={chat_color}>
			                    <div class={chat_triangle}></div>
			                    <p class="lyrics_text">{this.props.verse} </p>
			                </div>
			);
	}
}
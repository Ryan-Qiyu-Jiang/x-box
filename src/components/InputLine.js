import React from "react";

export default class InputLine extends React.Component{

	handleChangeInput(e){
		const command=e.target.value;
		this.props.changeCommand(command);
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.proccess();
	}

	handleLook(e){
		e.preventDefault();
		this.props.look();
	}

	render(){
		return(
			<div>
			<form id="input" onSubmit={this.handleSubmit.bind(this)}>
				<div class="row">
					<div class="col-9">
						<input type="text" id="commandInputLine" value={this.props.command} onChange={this.handleChangeInput.bind(this)} />
					</div>
					<div class="col-3">
						<button class="submit" type="submit"> Send </button>
					</div>
				</div>
			</form>
			</div>
			);
	}

}
import React from "react";
import { Link } from "react-router";

import Home from "./Home";
import About from "./About";
import Nav from "../components/Nav";

export default class Layout extends React.Component{

	render(){
		const { location } = this.props;
		return(
			<div>
				{this.props.children}
			</div>
			);
	}
}
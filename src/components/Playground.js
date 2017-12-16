import React from "react";
import keyIndex from 'react-key-index';

import Box from "../components/Box";

export default class Playground extends React.Component{
	render(){
		const output = this.props.boxList;
		const boxes=output.map((output)=><Box key={output.id} value={output} />);
		return(
					<div id="playground">
						<div class="circle_background">
						</div>
						{boxes}
					</div>
			);
	}
}
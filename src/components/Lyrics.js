import React from "react";
import keyIndex from 'react-key-index';

import ChatBox from "./ChatBox";

export default class Lyrics extends React.Component{
	render(){
		const output = keyIndex(this.props.lyrics, 1);
		const words=output.map((output,index)=><ChatBox key={output.id} index={index} verse={output.value} />);

		return(
						<div id="lyrics">
			               {words}
			            </div>
			);
	}
}
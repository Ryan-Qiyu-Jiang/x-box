import React from "react";

export default class Box extends React.Component{
render(){
    const traits = this.props.value;
    let color;
    if(traits.id == 'R'){
        color='#2D5F73';
    }else if(traits.id == 'Y'){
        color="#538EA6";
    }else if(traits.id == 'A'){
        color="#F2D1B3";
    }else if(traits.id == "N"){
        color="#F2B8A2";
    }else if(traits.id == "q"){
        color="#F28C8C";
    }else if(traits.id == "i"){
        color="#EF525B";
    }else if(traits.id == "y"){
        color="#F7F6EE";
    }else if(traits.id == "u"){
        color="#24C2CB";
    }


    const styles = {
        left: traits.xcord + "px",
        top: traits.ycord + "px",
        width: traits.width + "px",
        height: traits.height + "px",
        'backgroundColor': color,
        color: (traits.id=="y")? 'black':'white',
        display: (traits.id!=="table")? 'flex':'none'
    };
   return(
    <div style={styles} class="box unselectable">{traits.id}</div>
    );
}

}
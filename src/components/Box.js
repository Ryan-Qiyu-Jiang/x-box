import React from "react";

export default class Box extends React.Component{

handleClick(){
    this.props.setClicked(this.props.value.id);
}

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


    const boxStyles = {
        left: traits.xcord + "px",
        top: traits.ycord + "px",
        width: traits.width + "px",
        height: traits.height + "px",
        'backgroundColor': color,
        color: (traits.id=="y")? 'black':'white',
        display: (traits.id!=="table")? 'flex':'none',
    };

    const alertWrapStyles = {
        left: traits.xcord + traits.width/2 - 110 + "px",
        top: traits.ycord - 50 + "px",
        position:'absolute'
    };

    const alertStyles ={
        animation: (traits.clicked) ? 'alert-cycle 2s ease-in-out 0s forwards' : 'none'
    }

    const alertInnerStyles = {
        backgroundColor: color,
        color: (traits.id == "y")? 'black':'white'
    }

   return(
    <div onClick={this.handleClick.bind(this)}>
    <div style={alertWrapStyles}>
        <div class="alert-wrapper" style={alertStyles}>
            <div class="alert-small" style={alertInnerStyles}>
                <span>Drag-able in progress! :D</span> 
            </div>
        </div>
    </div>
    <div style={boxStyles} class="box unselectable">{traits.id}</div>
    </div>
    );
}

}
import React from 'react';
import ReactDom from 'react-dom';

function Welcome(props){
    return <h1>Hello, {props.name}, {props.greetings?props.greetings:""}</h1>;
}

function LotOfWelcome(props){
    return(
      <div>
        <Welcome name="Sara"/>
        <Welcome name="lmfao" greetings="mtherfcker"/>
        <Welcome name="aer" greetings="Meh"/>
      </div>
    )
}

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={date: new Date()};
    }
    componentDidMount(){
        this.timerID=setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
            date:new Date()
        });
    }
    render(){
        return (
        <div>
        <h2>Now is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        )
    }
}

const element = (
<div>
  <h1>Hello, world!</h1>
  <Clock />
  <Clock />
  <Clock />
</div>
);
ReactDOM.render(
element,
document.getElementById('root')
);

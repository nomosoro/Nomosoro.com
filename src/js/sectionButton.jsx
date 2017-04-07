import React from 'react';

export default class SectionButton extends React.Component {
    constructor(props){
        super(props);
        this.handleOnClick=this.handleOnClick.bind(this);
    }
    handleOnClick(){
        if(typeof this.props.handler === 'function'){
            this.props.handler(this.props.sectionName);
        }
    }
    render(){
        return(
            <button className="section-button" onClick={this.handleOnClick}>{this.props.sectionTitle}</button>
        )
    }
}
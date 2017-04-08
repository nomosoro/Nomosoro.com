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
        var className="section-button " + this.props.pos + ' ' + (this.props.isFadeout && 'fadeout' );
        return(
            <div className={className} onClick={this.handleOnClick}>
            <span className="section-button-text">{this.props.sectionTitle}</span>
            </div>
        )
    }
}
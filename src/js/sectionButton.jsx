import React from 'react';

export default class SectionButton extends React.Component {
    constructor(props){
        super(props);
        this.handleOnClick=this.handleOnClick.bind(this);
        this.state={
            isClicked:false
        }
    }
    handleOnClick(){
        if(typeof this.props.handler === 'function'){
            this.props.handler(this.props.sectionName);
        }
        this.setState({
            isClicked:true
        });
    }
    render(){
        var className="section-button " + this.props.pos + ' ' + (this.props.isFadeout && 'fadeout' ) + ' ' + (this.props.underhood && this.state.isClicked && 'showUnderhood');
        
        return(
            <div className={className} onClick={this.handleOnClick}>
                <span className="section-button-text">{this.props.sectionTitle}</span>
                <span className="section-button-underhood">{this.props.underhood}</span>
            </div>
        )
    }
}
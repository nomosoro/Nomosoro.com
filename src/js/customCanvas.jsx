import React from 'react';

export default class CustomCanvas extends React.Component{
    constructor(props){
        super(props);
    }
    setClassNames(classNames){
        this.setState({
            classNames:classNames
        })
    }
    render(){
        return(
            <div className="canvas-container">
             {this.props.imgUrl ?(
             <div className="canvas-img">
                <img src={this.props.imgUrl}/>
             </div> 
             )
             :
             (
             <div className="canvas-css {this.state.classNames}"></div>
             )
             }
            </div>
        )
    }
}
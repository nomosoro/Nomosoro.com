import React from 'react';

export default class ProfileSection extends React.Component{
    constructor(props){
         super(props);
    }
    render(){
        var contentComponents=[];
        if(this.props.contents&&this.props.contents.length){
            //content shoud contain at least 'type'.
            this.props.contents.forEach(function(content,i){
                if(content.type=='block'){
                    if(content.header){
                        contentComponents.push(<ProfileBlockHeader header={content.header} key={'header_'+i}></ProfileBlockHeader>);
                    }
                    if(content.html){
                        contentComponents.push(<ProfileBlockHtml html={content.html} key={'html_'+i}></ProfileBlockHtml>);
                    }
                }
            })
        }
        return (<div className="section-content profile">
            <div className="profile-section-header">Profile Page</div>
            {contentComponents}
        </div>)
    }
}


class ProfileBlockHeader extends React.Component{
    constructor(props){
         super(props);
    }
    render(){
        return (<div className="profile-block-header">{this.props.header}</div>)
    }
}

class ProfileBlockHtml extends React.Component{
    constructor(props){
         super(props);
    }
    render(){
        return (<div className="profile-block-content">{this.props.html}</div>)
    }
}

 
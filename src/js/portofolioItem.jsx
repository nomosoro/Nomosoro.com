import React from 'react';
export default class PortofolioItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            open:false
        }
        this.handleViewerClicked=this.handleViewerClicked.bind(this);
        this.handleContentClosed=this.handleContentClosed.bind(this);
    }
    handleViewerClicked(){
        this.setState({
            open:true
        });
    }
    handleContentClosed(){
        this.setState({
            open:false
        });
    }
    render(){
        var className="Portofolio-item-wrapper " + (this.state.open && "open");
        return (
            <div className={className}>
                <p>{'I am a ' + this.props.type + 'porotofolio item.'}</p>
                <PortofolioItemViewer {...this.props.viewer} handlerClick={this.handleViewerClicked} ></PortofolioItemViewer>
                <PortofolioItemContent {...this.props.content} handlerClose={this.handleContentClosed}></PortofolioItemContent>
            </div>
        );
    }
}

class PortofolioItemViewer extends React.Component{
    //viewer and entrypoint for a portofolio
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="portofolio-item-viewer" onClick={this.props.handlerClick}>
                <img className="portofolio-item-viewer-img" src={this.props.imgUrl}></img>
                <div className="portofolio-item-viewer-summary">{this.props.summary}</div>
            </div>
        );
    }
}
class PortofolioItemContent extends React.Component{
    render(){
        return (
            <div className="portofolio-item-content">
                <div className="portofolio-item-content-toolbar">
                    <button className="close-button" onClick={this.props.handlerClose}>close</button>
                </div>
                <div className="article">
                    {this.props.html}
                </div>
            </div>
        );
    }
}
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
        var className="portofolio-item-wrapper " + (this.state.open && "open");
        return (
            <div className={className}>
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
                <div className="portofolio-item-viewer-img-container">  
                    <img src={this.props.imgUrl}></img>
                </div>
                <div className="portofolio-item-viewer-summary">{this.props.summary}</div>
            </div>
        );
    }
}

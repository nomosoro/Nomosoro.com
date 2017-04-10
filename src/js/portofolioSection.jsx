import React from 'react';
import NewshubIntro from './article/newshubIntro.jsx';
import LittleBlueIntro from './article/littleBlueIntro.jsx';
import SketchesIntro from './article/sketchesIntro.jsx';
var items=[
    {
        type:'Modeling',
        title:'Little Blue',
        viewer:{
            imgUrl:'./img/portofolio1_cover.png',
            summary:'Little blue is my first Maya work flow practice, and he will serve as my first character through out later productions.'
        },
        content:{
            html:(<LittleBlueIntro></LittleBlueIntro>)
        }
    },
    {
        type:'Application',
        viewer:{
            imgUrl:'./img/newshub/newshub0.png',
            summary:'A powerful single page application for news viewing and managing.'
        },
        content:{
            html:<NewshubIntro></NewshubIntro>
        }
    },
    {
        type:'Sketch',
        viewer:{
            imgUrl:'./img/sketch2.jpg',
            summary:'Here are several finished or unfinished sketch works of mine, to be continued.'
        },
        content:{
            html:<SketchesIntro></SketchesIntro>
        }
    }
];

export default class PortofolioSection extends React.Component{
    constructor(props){
         super(props);
        this.state={
            isContentShowing:false,
            activeIndex:-1,
            isContentScrolled:false,
        }
        this.handleViewerClicked=this.handleViewerClicked.bind(this);
        this.handleContentClosed=this.handleContentClosed.bind(this);
        this.handleContentScroll=this.handleContentScroll.bind(this);
    }
    handleViewerClicked(i){
        console.log('viewerClicked with index i');
        this.setState({
            isContentShowing:true,
            activeIndex:i
        });
    }
    handleContentClosed(){
        this.setState({
            isContentShowing:false,
            isContentScrolled:false
        });
        document.getElementById('portofolio-content').scrollTop=0;
    }
    handleContentScroll(e){
        var elem=e.target;
        if(elem.scrollTop>50){
            this.setState({
                isContentScrolled:true
            });
        }else{
            this.setState({
                isContentScrolled:false
            })
        }
    }
    render(){
        var root=this;
        var portofolioItemViewers=[];
        items.forEach(function(item,i){
            portofolioItemViewers.push(<PortofolioItemViewer {...item.viewer} key={'item_viewer_'+i} index={i} handlerClick={root.handleViewerClicked}></PortofolioItemViewer>);
        });
//        var portofolioItemContent=[];
//        if(this.state.isContentShowing){
//            portofoiloItemContent.push();
//        }
        var className="section-content portofolio " + (this.state.isContentShowing ? 'content-showing' : '');
        var contentClassName="portofolio-content " +(this.state.isContentScrolled?'scrolled':'');
        return (
        <div className={className}>
            {this.state.isContentShowing && <div className="content-close-button" onClick={this.handleContentClosed}>View other works</div>}
            <div className="content-wrapper">
               <div className="portofolio-viewers">
                {portofolioItemViewers}
                </div>
                <div className={contentClassName}  onScroll={this.handleContentScroll} id="portofolio-content">
                {(this.state.activeIndex>-1) && <PortofolioItemContent {...items[this.state.activeIndex].content}></PortofolioItemContent>}
                </div>
            </div>
        </div>)
    }
}

class PortofolioItemContent extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className="portofolio-item-content">
                {this.props.html}
            </div>
        );
    }
}

class PortofolioItemViewer extends React.Component{
    //viewer and entrypoint for a portofolio
    constructor(props){
        super(props);
        this.handleOnClicked=this.handleOnClicked.bind(this);
    }
    handleOnClicked(){
        console.log('ha');
        if(this.props.index>-1){
            this.props.handlerClick(this.props.index);
        }
    }
    render(){
        return (
            <div className="portofolio-item-viewer" onClick={this.handleOnClicked}>
                <div className="portofolio-item-viewer-img-container">  
                    <img src={this.props.imgUrl}></img>
                </div>
                <div className="portofolio-item-viewer-summary">{this.props.summary}</div>
            </div>
        );
    }
}

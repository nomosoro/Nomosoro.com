import React from 'react';
import PortofolioItem from './portofolioItem.jsx'
export default class PortofolioSection extends React.Component{
    constructor(props){
         super(props);
    }
    render(){
        var portofolioItems=[];
        this.props.items.forEach(function(item,i){
            portofolioItems.push(<PortofolioItem {...item} key={'item_'+i}></PortofolioItem>);
        })
        return (<div className="section-content portofolio">
            <h2>Portofolio Page</h2>
            <div className="content-wrapper">
                {portofolioItems}
            </div>
        </div>)
    }
}
import React from 'react';
import ProfileSection from './profileSection.jsx';
import PortofolioSection from './portofolioSection.jsx';
import ThoughtsSection from './thoughtsSection.jsx';
import ConnectSection from './connectSection.jsx';

export default class SectionWrapper extends React.Component{
    constructor(props){
        super(props);
        this.handlerCloseSection=this.handlerCloseSection.bind(this);
    }

    handlerCloseSection(){
        this.props.closeHandler();
    }
    render(){
        console.log('Rendering section '+ this.props.sectionName + '.');
        var sectionComponent=(()=>{
            if(!this.props.sectionName){
                return null;
            }
            switch(this.props.sectionName){
                case 'profile':
                    return (<ProfileSection data={this.props.data.profile}></ProfileSection>);
                case 'portofolio':
                    return (<PortofolioSection data={this.props.data.portofolio}></PortofolioSection>);
                case 'thoughts':
                    return (<ThoughtsSection data={this.props.data.thoughts}></ThoughtsSection>);
                case 'connect':
                    return (<ConnectSection data={this.props.data.connect}></ConnectSection>);
            }
        })();
        console.log('Rendered component: ', sectionComponent);
        var activeClass = this.props.isActive? 'active':'inactive';
        return(
            <div className={"section-container " + activeClass}>
                <div className="section-toolbar">
                    <button className="close-section-button" onClick={this.handlerCloseSection}>Back to home</button>
                </div>
                {sectionComponent}
            </div>
        )
    }
}
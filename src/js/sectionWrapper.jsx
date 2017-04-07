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
    getSectionComponent(){
        if(!this.props.activeSectionName){
            return null;
        }
        switch(this.props.activeSectionName){
            case 'profile':
                return (<ProfileSection></ProfileSection>);
            case 'portofolio':
                return (<PortofolioSection></PortofolioSection>);
            case 'thoughts':
                return (<ThoughtsSection></ThoughtsSection>);
            case 'connect':
                return (<ConnectSection></ConnectSection>);
        }
    }
    handlerCloseSection(){
        this.props.closeHandler();
    }
    render(){
        return(
            <div className="section-container">
                <div className="section-toolbar">
                    <button className="close-section-button" onClick={this.handlerCloseSection}>Back to home</button>
                </div>
                {this.getSectionComponent()}
            </div>
        )
    }
}
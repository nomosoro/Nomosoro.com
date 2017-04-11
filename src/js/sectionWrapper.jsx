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
        var sectionComponent=(()=>{
            if(!this.props.sectionName){
                return null;
            }
            switch(this.props.sectionName){
                case 'profile':
                    return (<ProfileSection ></ProfileSection>);
                case 'portofolio':
                    return (<PortofolioSection ></PortofolioSection>);
                case 'thoughts':
                    return (<ThoughtsSection ></ThoughtsSection>);
                case 'connect':
                    return (<ConnectSection ></ConnectSection>);
            }
        })();
        var activeClass = this.props.isActive? 'active':'inactive';
        return(
            <div className={"section-container " + activeClass}>
                <div className="close-section-button" onClick={this.handlerCloseSection}>Back to home</div>
                {sectionComponent}
            </div>
        )
    }
}
// It is the root component of the app.
import React from 'react';
import SectionButton from './sectionButton.jsx';
import SectionWrapper from './sectionWrapper.jsx';
import CustomCanvas from './customCanvas.jsx';

export default class Nomosoro extends React.Component{
    constructor(props){
        super(props);
        this.state={
            introShown:true,
            sectionShown:false,
            activeSectionName:null,
        }
        
        this.openSection=this.openSection.bind(this);
        this.closeSection=this.closeSection.bind(this);
    }
    openSection(sectionName){
        console.log('Opening section with sectionName' + sectionName);
        this.hideIntro();
        this.setState({
            sectionShowm:true,
            activeSectionName:sectionName});
    }
    closeSection(){
         console.log('Closing Section.');
        this.setState({sectionShowm:false });
        this.showIntro();
    }
    showIntro(){ 
        this.setState({introShown:true});
    }
    hideIntro(){
        this.setState({introShown:false});
    }
    render(){
        return (
         <div className="nomosoro">
            <div className="intro-container {this.state.introShown?shown:hidden}">
                <CustomCanvas />
                <SectionButton sectionTitle="Who am I" sectionName="profile" handler={this.openSection}/>
                <SectionButton sectionTitle="Portofolio" sectionName="portofolio" handler={this.openSection}/>
                <SectionButton sectionTitle="Thoughts" sectionName="thoughts" handler={this.openSection}/>
                <SectionButton sectionTitle="Connect Me" sectionName="connect" handler={this.openSection}/>
            </div>
            <div className="section-container {this.state.sectionShown?shown:hidden}">
                <SectionWrapper sectionName={this.state.activeSectionName} closeHandler={this.closeSection}></SectionWrapper>
            </div>
         </div>
        )
    }
}
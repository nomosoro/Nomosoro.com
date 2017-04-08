// It is the root component of the app.
import React from 'react';
import SectionButton from './sectionButton.jsx';
import SectionWrapper from './sectionWrapper.jsx';
import CustomCanvas from './customCanvas.jsx';

export default class Nomosoro extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isHomeActive:true,
            isSectionActive:false,
            activeSectionName:null,
        }
        
        this.openSection=this.openSection.bind(this);
        this.closeSection=this.closeSection.bind(this);
    }
    openSection(sectionName){
        console.log('Opening section with sectionName ' + sectionName + '.');
        this.hideHome();
        this.setState({
            isSectionActive:true,
            activeSectionName:sectionName});
    }
    closeSection(){
        console.log('Closing Section.');
        this.setState({isSectionActive:false });
        this.showHome();
    }
    showHome(){ 
        this.setState({isHomeActive:true});
    }
    hideHome(){
        this.setState({isHomeActive:false});
    }
    render(){
        var homeClasses=(this.state.isHomeActive ? 'active' : 'inactive');
        return (
         <div className="nomosoro">
            <div className={"home-container " + homeClasses}>
                <SectionButton sectionTitle="Who are you?" sectionName="profile" handler={this.openSection} pos="top-left" isFadeout={this.state.isSectionActive} underhood={<img src="./img/nomosoro.logo.png" className="logo-mid"></img>}/>
                <SectionButton sectionTitle="Portofolio" sectionName="portofolio" handler={this.openSection} pos="top-right" isFadeout={this.state.isSectionActive}/>
                <SectionButton sectionTitle="Thoughts" sectionName="thoughts" handler={this.openSection} pos="bottom-left" isFadeout={this.state.isSectionActive}/>
                <SectionButton sectionTitle="Connect Me" sectionName="connect" handler={this.openSection} pos="bottom-right" isFadeout={this.state.isSectionActive}/>
                <div className="home-summary">{this.props.home.summary}</div>
            </div>
            <SectionWrapper {...this.props.sections} sectionName={this.state.activeSectionName} closeHandler={this.closeSection} isActive={this.state.isSectionActive}></SectionWrapper>
         </div>
        )
    }
}
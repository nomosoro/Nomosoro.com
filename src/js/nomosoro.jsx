
class Nomosoro extends React.Component{
    constructor(props){
        super(props);
        this.states={
            isActive:true,
        }
        
        this.openSection=this.openSection.bind(this);
    }
    openSection(sectionName){
        
    }
    closeSection(){
        
    }
    show(){
        this.setState({show:true});
    }
    hide(){
        this.setState({hide:true});
    }
    render(
    <div className="nomosoro  {this.state.show?shown:hidden}">
        <CustomCanvas />
        <div className="section-button-container">
            
            <SectionButton sectionTitle="Who am I" sectionName="profile" handler={this.openSection}/>
            <SectionButton sectionTitle="Portofolio" sectionName="portofolio" handler={this.openSection}/>
            <SectionButton sectionTitle="Thoughts" sectionName="thoughts" handler={this.openSection}/>
            <SectionButton sectionTitle="Connect Me" sectionName="connect" handler={this.openSection}/>
        </div>
     </div>
    )
}
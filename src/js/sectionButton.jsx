class SectionButton extends React.Component {
    constructor(props){
        super(props);
        this.handleOnClick=this.handleOnClick.bind(this);
    }
    handleOnClick{
        if(this.props.handler){
            this.props.handler(this.props.sectionName);
        }
    }
    render(
        <button className="section-button" onClick={handleOnClick}>{this.props.sectionTitle}</button>
    )
}
import React from 'react';

export default class ProfileSection extends React.Component{
    constructor(props){
         super(props);
    }
    render(){
        var content=(
            <div>
                <h2>I am Peter Guo, aka Nomosoro.</h2>
                <h3>I am ...</h3>
                <p>A web designer and developer, a future web expert.</p>
                <p>A game lover, a future game designer and developer.</p>
                <p>A music amateur, a future better music amateur.</p>
                <p>A reader, a future writer.</p>
                <p>A dream chaser and most importantly, a doer.</p>
                <h3>My story ...</h3>
                <p>Instead of introducing myself in long phrases, I would tell the story in short yet highlighted pieces: </p>
                <ul>
                    <li>
                        I was, am, will always be a video game lover. I played over 200+ video games through past 15 years, from tiny Braid to massive World of Warcraft, and from strategic Total War saga to the new genre : Dark Souls.
                    </li>
                    <li>
                        I was raised in a typical Chinese family, rebeled and gained independence at age 10, and have been a critical thinker for more than 10 years. I believe in logical reasoning and solid proof ONLY.
                    </li>
                    <li>
                        I do and insist on what I love:
                        <ul>
                            <li>
                                I decided to learn Japanese when I was 21, and I earned the highest level certificate of Japanese (JLPT N1) one and a half year later.
                            </li>
                            <li>
                                I picked up piano half year ago, and now I can play For River, Merry go round of life, Tori no Uta (鳥の詩) - re-feel, and recently trying to play Chopin's masterpieces.
                            </li>
                            <li>
                                I dreamed about making video games 5 years ago, and now I am doing it, as a coder, also as a designer.
                            </li>
                        </ul>
                    </li>
                </ul>
                <p>
                    Finally, I am only a learner till my very death.
                </p>
            </div>
        );
        return (<div className="section-content profile">
                    <div className="content-wrapper">
                        <div className="quoter-top-left"></div>
                        <div className="quoter-bottom-right"></div>
                        {content}
                    </div>
                </div>
               )
    }
}


class ProfileBlockHeader extends React.Component{
    constructor(props){
         super(props);
    }
    render(){
        return (<div className="profile-block-header">{this.props.header}</div>)
    }
}

class ProfileBlockHtml extends React.Component{
    constructor(props){
         super(props);
    }
    render(){
        return (<div className="profile-block-content">{this.props.html}</div>)
    }
}

 
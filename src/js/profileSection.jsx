import React from 'react';

export default class ProfileSection extends React.Component{
    constructor(props){
         super(props);
    }
    render(){
        var content=(
            <div>
                <h2>Greetings traveler. I am Peter Guo, aka Nomosoro, and this is my personal website.</h2>
                <h3>I am ...</h3>
                <p>A gamer, a future game designer and developer.</p>
                <p>A web designer and developer, a future web expert.</p>
                <p>A thinker and coder, creator.</p>
                <p>A piano amateur, a future better piano amateur.</p>
                <p>A reader, a future writer.</p>
                <p>A dream chaser and most importantly, a doer.</p>
                <h3>My story ...</h3>
                <p>Instead of introducing myself in long phrases, I would like to tell my story in short yet highlighted pieces: </p>
                <ul>
                    <li>
                        I was, am, and will always be a video game lover. I have already played over 200+ video games through past 15 years, from tiny Braid to massive World of Warcraft, and from strategic Total War saga to the new genre : Dark Souls.
                    </li>
                    <li>
                        I was raised in a typical Chinese family, restricted on playing video games by my parents, therefore rebeled and then gained independence at age 10. Luckily, since when I have already been a critical thinker for more than 10 years. I believe ONLY, in logical reasoning and solid proof.
                    </li>
                    <li>
                        I do and insist on what I love:
                        <ul>
                            <li>
                                I decided to learn Japanese when I was 21, and I earned the highest level certificate of Japanese (JLPT N1) one and a half year later.
                            </li>
                            <li>
                                I picked up piano half year ago, and now I can play <cite>For River</cite>, <cite>Merry go round of life</cite>, <cite>Tori no Uta (鳥の詩) - re-feel</cite>, and recently I am trying to play Chopin's masterpieces.
                            </li>
                            <li>
                                I dreamed about making video games 5 years ago, planned and failed, repeatingly frustrated. But eventually I am on the rail, as both a designer and programmer, and trying to be an artist as well.
                            </li>
                        </ul>
                    </li>
                </ul>
                <p>
                If you think after reading things above you have already catched most parts of me, you are probably right. I am as simple as this website's UI.
                </p>
                <h3>I am current working on...</h3>
                <ul>
                    <li>The website you are looking at, this is my personal website and I will post more and more my works and thoughts through it, I will also improve and increase its functionality gradully.</li>
                    <li>A puzzle game with Unity Engine, the ugly demo is in my portofolio and you can check it in this site.</li>
                    <li>Thought notes.</li>
                </ul>
                <h4>And</h4>
                <ul><li>everything I am interested in and capable to start with. Thanks to youtube and various specific communities, I can learn every skill I desire without much efforts. I am practicing my written skills, oral representation skills, drawing/painting skills, music skills, coding skills, design skills, 3D modeling skills and others in a round robin manner, or whenever manner.</li></ul>
                <h3>To conclude...</h3>
                <p>Please allow me to apologize for minimal features and the poor UI here, as this website is built in a very short time for information display only, and it is still under development. But you can view it in github freely, and suggest any improvement or leave your comments in the issues, for now. You can also read a detailed meta-introduction to it in my portofolio.</p>
                <p>#8/4/2017 at Hong Kong</p>
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

 
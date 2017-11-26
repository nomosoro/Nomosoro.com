import React from 'react';
export default class SketchesIntro extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="article">
               <p>Before seeing those, please endure my bad performance. I picked up drawing at Feb 2017, before which time I have never tried to do even a single piece of sketching. And after 2 months I can do these now, I am already proud of myself.</p>
               <div className="article-img-wrapper sketch">
                    <img src="./img/sketch6.jpg"></img>
                    <span className="img-caption">A copy try for one of the work of Kemp Remillard</span>
                </div>
                <p>This is my best work sketch so far, probably because of Sir Remilard is so good..<a href="http://www.kempart.com/my-art#11182_image_863271" target="_blank">This is</a> his original work. </p>
                <div className="article-img-wrapper sketch">
                    <img src="./img/sketch5.jpg"></img>
                    <span className="img-caption">A quick sketch of Naomi Watts, one of my favorite actress. </span>
                </div>
                <p>I know I kinda screwed this one, will definitely try a new one these days.</p>
                 <div className="article-img-wrapper sketch">
                    <img src="./img/sketch6.png"></img>
                    <span className="img-caption">The onion knight, a famous character in Dark Souls Series representing loyalty, friendship and justice. </span>
                </div>
                <p>I am a chabby guy, he is a chabby guy. He is humurous, generous, vow abiding and also a tough warrior. I want to be him and he is my idol of the series.</p>
                <div className="article-img-wrapper sketch">
                    <img src="./img/sketch3.jpg"></img>
                    <span className="img-caption">My first scene drawing try, themed as a time-interlaced city. </span>
                </div>
                <p>This idea came from the sightseen where my daily running park resides, and you can see I put the running lane at the bottom-left of the canvas, it was planned to represent the ancient dam track however. And I am trying to give a nice european classic house on the bottom-right, a recent-future travel shuttle above the sea, and finally a modern cluster of skycrapers and buildings at far, derive from where I current live in, Hong Kong.</p>
                <div className="article-img-set-wrapper">
                    <div className="img-set">
                        <img src="./img/sketch7.png"></img>
                        <img src="./img/sketch8.png"></img>
                        <img src="./img/sketch9.png"></img>
                        <img src="./img/sketch1.jpg"></img>
                        <img src="./img/sketch4.jpg"></img>
                    </div>
                    <span className="img-caption">Other sketches</span>
                </div>
                <p>Fisrt three are asset design for typical north-eastern china countryside scene. Followed with another sketch featuring Béatrice Martin, and a sketch of my old friend's funny face when he was young.</p>
                
                <p>I know you will find those sketches and designs very lame and premature my dear reader, but believe me I wont let you down in time, just check it later.</p>
            </div>
            
        )
    }
}
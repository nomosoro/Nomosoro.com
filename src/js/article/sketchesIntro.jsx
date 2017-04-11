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
                    <img src="./img/sketch2.jpg"></img>
                    <span className="img-caption">A copy try for one of the work of Kemp Remillard</span>
                </div>
                <p>This is my best work sketch so far, probably because of Sir Remilard is so good..<a href="http://www.kempart.com/my-art#11182_image_863271" target="_blank">This is</a> his original work. It is sadly an unfinished due to my recent heavy workload, will catch up it soon when in the break.</p>
                <div className="article-img-wrapper sketch">
                    <img src="./img/sketch1.jpg"></img>
                    <span className="img-caption">A quick sketch of Béatrice Martin, the composer and singer behind Child of Light.</span>
                </div>
                <p>This is another</p>
                <div className="article-img-wrapper sketch">
                    <img src="./img/sketch4.jpg"></img>
                    <span className="img-caption">Funny Sketch of Zeheng Jiao </span>
                </div>
                <p>This is one of my old friend and I sketched his funny face when he was embarrased by a very lame teacher.. It is an experimental on shadows and... apparently I overtuned.</p>
                <div className="article-img-wrapper sketch">
                    <img src="./img/sketch3.jpg"></img>
                    <span className="img-caption">My first scene drawing try, themed as a time-interlaced city. </span>
                </div>
                <p>This idea came from the sightseen where my daily running park resides, and you can see I put the running lane at the bottom-left of the canvas, it was planned to represent the ancient dam track however. And I am trying to give a nice european classic house on the bottom-right, a recent-future travel shuttle above the sea, and finally a modern cluster of skycrapers and buildings at far, derive from where I current live in, Hong Kong.</p>
                
            </div>
            
        )
    }
}
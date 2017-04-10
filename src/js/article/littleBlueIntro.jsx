import React from 'react';
export default class LittleBlueIntro extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="article">
               <div className="article-head-img-wrapper">
                    <img src="./img/portofolio1_cover.png"></img>
               </div>
                <h2 className="article-head">Little Blue</h2>
                
                <p>Little blue is my first attempt to build a fully functioning 3D character for my later game development, and I chose Autodesk Maya 2017 as the software. You can have a quick peak of the final result of little blue at my youtube channel : <a href="https://youtu.be/Khw_lMcZnfg" target="_blank">Little Blue Buddy and his movesets!</a>. I will try to cover the making procedure of Little Blue together with some conclusion and insights.</p>
                <h4>Table of contents</h4>
                <ul>
                    <li><a href="#prototyping">Prototyping</a></li>
                    <li><a href="#modeling">Modeling</a></li>
                    <li><a href="#texturing">Texturing</a></li>
                    <li><a href="#rigging-and-skinning">Rigging and Skinning</a></li>
                    <li><a href="#animation">Animation</a></li>
                    <li><a href="#rendering-setup">Renderring Setup</a></li>
                </ul>
                <h3 id="prototyping">Prototyping</h3>
                <p>The idea of Little blue stemmed fron a game idea, in which players are going to play as a lonely furry little guy with a torch only to explore the environment and survive. Although this game will probabbly kept in conceptual form, I decided to develope our furry guy out, and it finally has its form now. </p>
                <div className="article-img-wrapper">
                    <img src="./img/portofolio1_prototype2.jpg"></img>
                    <span className="img-caption">The general concept sketch of the furry buddy</span>
                    <img src="./img/portofolio1_prototype1.jpg"></img>
                    <span className="img-caption">The possible movesets for the furry buddy</span>
                </div>
                <p>Above are some sketched prototypes during the design of our furry guy, luckily I managed to feature the round torso and those slim arms. For the furry part, I am plannig to implement it in Unity Shader scripts, that is another story.</p>
                <h3 id="modeling">Modeling</h3>
                <p>The modeling of Little Blue, as you can easily figure out, is very simple. After several failures and re-works, I modeled the final version within 1 hours.
                </p>
                <div className="article-img-set-wrapper">
                    <div className="img-set">
                        <img src="./img/portofolio1_model1.png"></img>
                        <img src="./img/portofolio1_model2.png"></img>
                        <img src="./img/portofolio1_model3.png"></img>
                    </div>
                    <span className="img-caption">The final version of Little Blue Model, in frame 1 ideling stance.</span>
                </div>
                <p>To quickly recap, the final model has 1096 faces, consists of a main sphere torsor and slim cylindrical arms and legs. To simplify the tasks and also to accelerate the practice, I made his hands a club like capsule object, and it seems legid when Little Blue is interacting with other objects in the game. I exaggerated the ratio setup in the prototype for his arms and legs, for the more slimer he seems more lonely and helpless, cant even stand the first round of fight.  </p>
                <p>Because it is my first try, so I will not blame myself much for the mistakes in the final version. However some of those flaws made me suffer a lot in later production. The geometry around every joints of Little Blue are horribly arranged, and when I was doing rigging/skinning and animation the problems are enlarged, that the geometry around joints are ugly and distorted when joints are rotating. The glitches are nearly intolerable. </p>
                <h3 id="texturing">Texturing</h3>
                <div className="article-img-wrapper">
                    <img src="./img/portofolio1_UV.png"></img>
                    <span className="img-caption">The UV map of Little Blue</span>
                </div>
                <p>Thanks to the symetric and simple model, UV unwrap and mapping is not a tough task. </p>
                <h3 id="rigging-and-skinning">Rigging and Skinning</h3>
                <div className="article-img-set-wrapper">
                    <div className="img-set">
                        <img src="./img/portofolio1_rigging1.png"></img>
                        <img src="./img/portofolio1_rigging2.png"></img>
                        <img src="./img/portofolio1_rigging3.png"></img>
                    </div>
                    <span className="img-caption">(Left to right) The Skeleton, Skeleton with IK and controls, Hierachy Glimpse</span>
                </div>
                <p>
                    The rigging and skinning procedure turned out to be suprisingly challenging. Little blue was supposed to be a sticky guy so his rigging is obvious and straightfoward, but the skinning process is quite different from normal humanoid skining process. The flaw of model which I mentioned above, that in each joints there are limited buffing polygons for me to manage so the skinning weight of them are harshly distributed: 
                </p>
                <div className="article-img-wrapper">
                    <img src="./img/portofolio1_skinning.png"></img>
                    <span className="img-caption">The steep weight change in the right shoulder joint.</span>
                </div>
                <p>Also, during the rigging process which I done before skinning, I placed the shoulder joint too extruded, which resulted in the arms of Little Blue are as if not part of the body.</p>
                <h3 id="animation">Animation</h3>
                <p>The final animation with rendering can be viewed in the youtube video below:</p>
                <div className="article-img-wrapper">
                    <iframe width=" 560" height="315" src="https://www.youtube.com/embed/Khw_lMcZnfg" frameBorder="0" allowFullScreen></iframe>
                    <span className="img-caption">The animation of Little Blue: idle, walk, run, pick and wave. </span>
                </div>
                <p>I tried my best to made each clip of animation smooth as water, but turned out that this is very, very time costing. Too much detail polishing. Therefore since the project are sized in a tiny version I skipped lot of detail implementations. Good news are the animations are well suited in Unity with its powerful animation blending system.</p>
                <h3 id="rendering-setup">Rendering Setup</h3>
                <p>To make the demo of the animation I included a 0.1 intensity ambient light,two 0.5 intenstiy side spot light and a 1.5 intensity main spot light. The image sequence are rendered by maya software built-in render.</p>
                
            </div>
        )
    }
}
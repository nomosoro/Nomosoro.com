const css = require('../css/nomosoro.css');
console.log("Hellow from scripts.js");

import React from 'react';
import ReactDOM from 'react-dom';
import ProfileContent from './article/profileContent.jsx';
import Nomosoro from './nomosoro.jsx';
var data={
    home:{
        summary:'This is a summary Text'
    },
    sections:{
        profile:{
            contents:[
                {type:'block',header:'I am a block header.',html:(<p>I am a block content, and I am with my fellow link: <a src="#" target="_blank">I am a link!</a></p>)},
                {type:'block',header:'I am another block header.',html:<ProfileContent></ProfileContent>}
            ]
        },
        portofolio:{
            items:[
                {
                    type:'drawing',
                    viewer:{
                        imgUrl:'./img/newshub1.PNG',
                        summary:'A web-app for news management.'
                    },
                    content:{
                        html:'I am for Newshub.'
                    }
                },
                {
                    type:'game',
                    viewer:{
                        imgUrl:'./img/newshub1.PNG',
                        summary:'I am a another viewer summary'
                    },
                    content:{
                        html:'I am a game content'
                    }
                }
            ]
            
        },
        thoughts:{},
        connect:{}
    },
}

ReactDOM.render(
<Nomosoro {...data}/>,
document.getElementById('root')
);






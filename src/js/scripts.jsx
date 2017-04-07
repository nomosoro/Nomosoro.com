const css = require('../css/nomosoro.css');
console.log("Hellow from scripts.js");

import React from 'react';
import ReactDOM from 'react-dom';
import Nomosoro from './nomosoro.jsx';

var data={
    home:{
        summary:'This is a summary Text'
    },
    sections:{
        profile:{
            contents:[
                {type:'block',header:'I am a block header.',html:(<p>I am a block content, and I am with my fellow link: <a src="#" target="_blank">I am a link!</a></p>)},
                {type:'block',header:'I am another block header.',html:(<p>I am another block content, and I am with my fellow link: <a src="#" target="_blank">I am a link!</a></p>)}
            ]
        },
        portofolio:{},
        thoughts:{},
        connect:{}
    },
}

ReactDOM.render(
<Nomosoro data={data}/>,
document.getElementById('root')
);






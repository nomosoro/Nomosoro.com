import React from 'react';

export default class ConnectSection extends React.Component{
    constructor(props){
         super(props);
    }
    render(){
        return (<div className="section-content connect">
            <div className="content-wrapper">
                <h4>Feel free to contact and connect with me! Although I am still a novice to everything but I will definitely catch up in the future!</h4>
                <p><a href="https://www.youtube.com/channel/UCpzeEGGBSboNqNhkrHwl0sw" target="_blank">My Youtube Channel</a></p>
                <p><a href="https://www.facebook.com/profile.php?id=100004357688831" target="_blank">My Facebook</a></p>
                <p><a href="http://stackoverflow.com/users/5452859/nomo-san" target="_blank">My Stackoverflow</a></p>
                <p><a href="https://github.com/nomosoro" target="_blank">My Github</a></p>
                <p>My Contact Info: nomosoro@hotmail.com.hk  |  (+852) 53340020 </p>
            </div>
        </div>)
    }
}
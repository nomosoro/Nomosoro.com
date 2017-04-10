import React from 'react';
export default class NewshubIntro extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="article">
                <div className="article-head-img-wrapper">
                    <img src="./img/newshub/newshub0.png"></img>
                </div>
                <h2 className="article-head">Newshub - Ultimate news manager</h2>
                <p>Newshub is my latest web application project when I was hired for a private company. I was in charge of all the user interface design and data transfer at the client side, as well as maintaining and documenting the application. I will only introduce UI level design results and interacting stategies, but will left developing untouched as it is privacy for the company, also for the same reason there is no demo avaliable as the app is only for company internal usage.</p>
                <h4>Table of contents</h4>
                <ul>
                    <li><a href="#overview">Overview</a></li>
                    <li>
                    <a href="#news-panel">News Panel</a>
                    <ul>
                        <li><a href="#layout">Layout</a></li>
                        <li><a href="#news-list">News List</a>
                            <ul>
                            <li><a href="#news-list-settings">News List Settings</a></li>
                            </ul>
                        </li>
                        <li><a href="#news-reader">News Reader</a>
                            <ul>
                            <li><a href="#reader-settings">Reader Settings</a></li>
                            </ul>
                        </li>
                    </ul>
                    </li>
                    <li><a href="#filter-panel">Filter Panel</a></li>
                    <li><a href="#navbar-and-sidebar">Navbar and Sidebar</a></li>
                    <li><a href="#responsive-design">Responsive Design</a></li>
                    <li><a href="#notable-functions">Notable Functions</a></li>
                </ul>
                <h3 id="overview">Overview</h3>
                <div className="article-img-wrapper">
                    <img src="./img/newshub/docImg/newshub1.png"></img>
                    <span className="img-caption">An overview of the app structure</span>
                </div>
                <p>Newshub serves as a news viewer and manager in the same time, designed with smooth interacting behaviour and fast reaction speed for max user experience. The main interface consists of three main different sections : <a href="#news-panel">News Panel</a>, <a href="#news-panel">Filter Panel</a>, and <a href="#navbar-and-sidebar">Navbar and Sidebar</a>. User typically will view, search and manage news by utilizing both News Panel and Filter Panel sections, and custom global settings and do the account management in the Navbar and Sidebar section. Note that the figure above does show the sidebar, beacuse it gets called only when buttons on Navbar clicked, and it resides in the right of the screen as you can see in the following content.</p>
                <p>I will start with the News Panel section first, as it is the backbone and core function of the app, also involves most interactions in general.</p>
                <h3 id="news-panel">News Panel</h3>
                <p>News panel play as the face viewport of the app, it is in responsible of displaying different news lists, display news readers, offer interactions for list managing and offer interactions for news reading. It gathers information from program backbone and render then in neat UI components, and take inputs from user to customize the current display. I will introduce news panel in its <a href="#layout">Layout</a> first then go to the detail of the main sub-components.</p>
                <h4 id="layout">Layout</h4>
                <div className="article-img-wrapper">
                    <img src="./img/newshub/docImg/newshub3.png"></img>
                    <span className="img-caption">The layout of news panel</span>
                </div>
                <p>At the top of news panel lies a strip of buttons, to the left is the list-tab container representing customized lists and active list. I chose to resemeble the tabs in a seamless manner over the more common real-tab simulations such as what google-chrome did. Below which line is a list-wise toolbar for user to interact with the active list only. List then will render its item in the item wrapper container below first in its 'item' form, which is a summary version to quickly view at. Each item has its Media Name, Duplicate Count, News Tilte, News Summary, News Category and News Time exposed from left to right (In the PC version, there are changes in mobile version, see <a href="#responsive-design">Responsive Design</a> below). Also note that main list has its unique function that will fold those news the application judged as 'unimportant' to increase the reading speed and reading efficiency, folded news can be viewed by clicking on those button on the right-side of news-panel.</p>
                
                <h4 id="news-list">News List</h4>
                <p>Each list has a tab to represent its name and its status. The tab with a red square behind the tab means that this list has new-arrived/unread news. The search button on the right side will show the search input upon clicked, and when user input a new keyword the application will automatically generate a new news list named and based on that keyword then active and render that list, so it is not the traditional defination of search as we take searching as creating new list then active them.</p>
                <p>Each list has its own toolbar to operate with. User can mark all current listed news as read, or refresh the list to check new arrivals, or open the list setting panel from here.</p>
                <h5 id="news-list-settings">News List Settings</h5>
                <div className="article-img-wrapper">
                    <img src="./img/newshub/newshub13.png"></img>
                    <span className="img-caption">The avaliable settings for main list</span>
                </div>
                <p>Users are provided customization for each list to make up their own prefrences. Each setting item can have a tooltip (the question mark) if the setting context is not clear. Some of the setting item are dependent on each other, thus when one is inactive the other one will be hidden. For example <b>Duplicate Threshhold</b> setting will disappear upon <b>Merge Duplicate News</b> unchecked. The settings are immediately applied upon value update, as each setting involves affordable amount of calculations and rendering, so there is no need to reload the app for it.</p>
                <ul>
                    <li><b>Auto-loading</b> will allow list to read new items when user scrolled downward and reaches the bottom of list, if unchecked user will have to click on the 'load more' button to forcely load new items.</li>
                    <li><b>Merge Duplicated News</b> will allow list to merge duplicated news items based on its judgement, in order to increase reading efficiency.</li>
                    <li><b>Duplicate Threshhold</b> is the dependent setting to Merge Duplicated News, it is a ranged value that can be set through the slide-bar UI I offered. </li>
                    <li><b>Fold News</b> will allow list to fold unimportant news items based on its judgement, in order to increase reading efficiency. This is a main list unique feature.</li>
                    <li><b>Fold Mode</b> is the dependent setting to Fold News, it is a single choice value that can be set through the single choice UI I offered </li>
                    <li><b>Display Media</b> will allow list to suppress the multimedia items when news-item are opened and be read, see details of multimedia items at <a href="#news-reader">News Reader</a>.</li>
                </ul>
                <h4 id="news-reader">News Reader</h4>
                <div className="article-img-wrapper">
                    <img src="./img/newshub/docImg/newshub4.png"></img>
                    <span className="img-caption">The layout of News Reader.</span>
                </div>
                <p>The news reader derived from text reader, a generic type of component. It has its unique left-sidebar to expand its functionality. The figure above shows a case when we are open a duplicated item, in which case the reader will use the same tab-system to represent each of the duplicated news-item by showing their source media as the tab-name, over extended tabs will be collpased and can be interacted with by open the collapse dropdown. The full screen button will show text-reader in full screen for long articles. The news reader has four unique operations shown in the left sidebar, which is opened by the second button in the toolbar. The first button will open the generic <a href="#reader-settings">Reader Settings</a> for reader visual customization. </p>
                <p>The related multimedia items will be placed after the main article of the news item, and can be set hidden through list settings. The multimedia items has three sub-type: image, youtube-video and comments. Image type can be viewed in full screen upon click, video type will link to new tab to view the video and comment type will have no effect.</p>
                <h5 id="reader-settings">Reader Settings</h5>
                <div className="article-img-wrapper">
                    <img src="./img/newshub/docImg/newshub5.png"></img>
                    <span className="img-caption">The visual setting of Text Reader.</span>
                </div>
                <p>The reader setting takes great resemblance to those on Amazon Kindle, only replaced each setting entry by my own setting UI. Those settings are very self-explianable so I will save my words and time here. </p>
                <h3 id="filter-panel">Filter Panel</h3>
                <div className="article-img-wrapper  height-limited">
                    <img src="./img/newshub/docImg/newshub2.png" height="800px"></img>
                    <span className="img-caption">The layout of Filter Panel</span>
                </div>
                <p>The filter panel offers user with function to add actual filters to main news list only. The filter consists of date picker, category picker and the media picker.</p>
                <ul>
                    <li><b>Date Picker</b>, as its name suggests, it will allow user to select the date range to display the main-list news items. It is a plugin program written by open source author, I altered the CSS only to fit in my application. I made it to has two mode of selection, single day and range, similary to the category and media picker.</li>
                    <li><b>Category Picker</b> and <b>Media Picker</b> are created from same component and they function identically. They have both single and multiple selection mode as well.</li>
                </ul>
                <div className="article-img-wrapper">
                    <img src="./img/newshub/newshub12.png" ></img>
                    <span className="img-caption">The Active Filter bar in main list</span>
                </div>
                <p>The active filter item will be displayed under the main list toolbar, and each of displayed items can be disabled by clicking the item, when there is no filter active, the main list will fall back into the origin state.</p>
                <h3 id="navbar-and-sidebar">Navbar and Sidebar</h3>
                <div className="article-img-wrapper height-limited">
                    <img src="./img/newshub/docImg/newshub6.png" height="800px"></img>
                    <span className="img-caption">The layout of Account Sidebar</span>
                </div>
                <p>
                    The app sidebar will be shown when each of the navbar button got clicked. Each sidebar has its own title and can be closed and re-opend. Sidebar has a 'forward and backword' system which allows user to enter a sub-section of the sidebar, i.e. change password, then roll back to its parent section when user clicked the return button. The sidebar is similar to those in MS Office, same as which it will trigger the left part content to adjust their displayment upon width shrink.
                </p>
                <h3 id="responsive-design">Responsive Design</h3>
                <div className="article-img-set-wrapper">
                    <div className="img-set">
                        <img src="./img/newshub/newshubM1.png"></img>
                        <img src="./img/newshub/newshubM2.png"></img>
                        <img src="./img/newshub/newshubM3.png"></img>
                        <img src="./img/newshub/newshubM4.png"></img>
                    </div>
                    <span className="img-caption">(Left to right) The main viewport, news reader, list setting and opened sideabr in mobile enviroment of newshub.</span>
                </div>
                <p>Newshub is also a responsively designed product. It will fit to mobile environment both in UI and in program. Above are those main adjustment when app enters mobile environment. The main stategy I picked to make this compatible in mobile is to cut the display region of UI elements based on their priorities. For example if the UI element contains less information then it should be probably omitted when in mobile, and those occupying large space of screen with less useful information will get shrinked or even cuted in mobile. However in the mobile version, 'cut' does not means that it is disabled. Via more interactions user should still be able to access the function, for example filter panel in mobile are made as a horizontal scrollable panel, and user can only access the cateogry/media selection by sliding the panel.</p>
                <h3 id="notable-functions">Notable Functions</h3>
                <p>There are notable 'invisible' functions for the app which involves design method. For instance:</p>
                
                <ul>
                    <div className="article-img-wrapper">
                        <img src="./img/newshub/docImg/newshub9.png"></img>
                        <span className="img-caption">Quick Action and Keyword Highlight</span>
                    </div>
                    <li>Quick actions. In desktop, each news item will show their quick actions toolbar when user hovers on it. The two actions are quickly favorite news and dismiss the news. Dismissed news will disappear permanently.</li>
                    <li>Keywords highlighting. By default each list except main list has their own keyword to highlight with, and user can even add more sub-keyword to track more accurately.</li>
                    <div className="article-img-set-wrapper">
                        <div className="img-set">
                            <img src="./img/newshub/newshub7.png"></img>
                            <img src="./img/newshub/newshub8.png"></img>
                        </div>
                        <span className="img-caption">(Left to right) The main viewport, news reader, list setting and opened sideabr in mobile enviroment of newshub.</span>
                    </div>
                    <li>Global settings. User can set the global font-size and the global language for the app through the setting sidebar. </li>
                    <li>Single Instance Checker (Unique.js). It allows only one single app runs in each browser instance. When another instance of app is opened, user will be reminded that there is already one opened app so user could choose to switch back or open the app here.</li>
                    <li>Resize warning. When user resize the screen in browser, or re-orient the Ipad or Iphone for example, user will be suggested to reload the app by clicking the poped up reload button in order to get the fittest UI for the current screen size.</li>
                    <li>Automatic news feed. App will check whether there is new arrived news every 1 minute, and push the new arrived news in all news lists. This interval can not be altered as it is highly server performance related.</li>
                </ul>
            </div>
        )
    }
}
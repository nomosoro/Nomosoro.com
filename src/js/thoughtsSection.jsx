import React from 'react';
import ScrollHelper from './scrollHelper.jsx'
export default class ThoughtsSection extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var thoughtContents=(
            <div className="content-wrapper">
               <div className="article">
                    <h2 >Two Game Idea came up today.</h2>
                    <ArticleInfo time="13/4/2017" category={['Idea']}></ArticleInfo>
                    <p><b>Planet Giant.</b> Literally, in the galaxy Andromeda(lol), there is a human habitual planet left with mysterious ruines of giant buildings. Players have ability to fast travel though.</p>
                    <p></p>

                </div>
                <div className="article">
                    <h2 >Art of Game Design Notes</h2>
                    <ArticleInfo time="13/4/2017" category={['Design','Game','Art','Logic']}></ArticleInfo>
                    <h4>Lens #1: Emotion</h4>
                    <ul>
                    <li>What emotions would I like my player to experience? Why?</li>
                    <li>What emotions are players (including me) having when they play now? Why? </li>
                    <li>How can I bridge the gap between the emotions players are having and the emotions I’d like them to have?</li>
                    </ul>
                    <h4>Lens #2: Essensial Experience</h4>
                    <ul>
                    <li>What experience do I want the player to have?</li>
                    <li>What is essential to that experience?</li>
                    <li>How can my game capture that essence?</li>
                    </ul>
                    <h4>Lens #3: Venue</h4>
                    <ul>
                    <li>What type of venue best suits the game I’m trying to create? </li>
                    <li>Does my venue have special properties that will influence my game? </li>
                    <li>What elements of my game are in harmony with my venue? What elements are not?</li>
                    </ul>
                    <h4>Lens #4: Surprise</h4>
                    <ul>
                    <li>What will surprise players when they play my game?  </li>
                    <li>Does the story in my game have surprises? Do the game rules? Does the artwork? The technology?</li>
                    <li>Do your rules give players ways to surprise each other? </li>
                    <li>Do your rules give players ways to surprise themselves?</li>
                    </ul>
                    <h4>Lens #5: Fun</h4>
                    <ul>
                       <li>What parts of my game are fun? Why? </li>
                       <li>What parts need to be more fun?</li>
                    </ul>
                    <h4>Lens #6: Curiosity</h4>
                    <ul>
                       <li>What questions does my game put into the player’s mind? </li>
                       <li>What am I doing to make them care about these questions? </li>
                       <li>What can I do to make them invent even more questions?</li>
                    </ul>
                    <h4>Lens #7: Endogenous Value</h4>
                    <ul>
                       <li>What is valuable to the players in my game?  </li>
                       <li>How can I make it more valuable to them?  </li>
                       <li>What is the relationship between value in the game and the players’ motivations?</li>
                    </ul>
                    <h4>Lens #8: Problem Solving</h4>
                    <ul>
                       <li>What problems does my game ask the player to solve?   </li>
                       <li>Are there hidden problems to solve that arise as part of gameplay? </li>
                       <li>How can my game generate new problems so that players keep coming back?</li>
                    </ul>
                </div>
                <div className="article">
                    <h2 className="article-title">
                        What is <b>DESIGN</b>
                    </h2>
                    <ArticleInfo time="12/4/2017" category={['Design','Logic','Art']}></ArticleInfo>
                    <p>Months ago, I asked one of my old friend who majored in archtecture, that by which words would he define the process or the actual meaning of 'design'. He replied me with a rough sentence stating that design is to make an idea become reality. I was then dissatisified, as I could not clearly figure out the difference between the word 'implementation' and what he defines 'design'. I lately wikied for an anwser, and wiki gave me very concise and dedicated article and I read through it. I would not redraft another article trying to beat the authorized one, instead I will try to proclaim, that when we consider design process in a goal-wise manner, design shuold only have two purpose in general: Optimization and Expression</p>
                    <h4>Optimization</h4>
                    <p>In the Wiki article, The Rational Model is the actual process of Optimization-driven design. Involved design fields mainly spread in engineering, researching and other reconductable field, which can be easily and massively test and experimented. But when we consider design goal-wise, its mere and only purpose is to make things better for usage, wherever the utilitization will go to, say visual elegancy, or efficiency, as long as the attribute is optimizable, scalar or refinable. And there is actually nothing can not be optimized, as things can not been optimized means that things either reached its best or it can not be judged/valued good or bad. For the latter situation, when things can not be judged/valued, the meaning of optimization it self dissolved into nothing, as optimization was defined based on measurable value. </p>
                    <p>
                    But be warned, that optimization is not a converged, or guaranteened result. The optimized value varied over time, culture, etc a lot of variables, and that is where designers will never come to its end. And mutations, or discovery will potentially reveal new level of optimization, which will as well make the optimization process endless, as long as we cannot prove that the current state has no space to advance higher.</p>
                    <h4>Expression</h4>
                    <p>Just like poem to math, expression is nearly in contract manner to the rational optimization. In Wiki the similar process is called The Action-Centric Model, which is infact a methods of Optimization, that will evoke possible mutations to discover new level of optimization. However, Expression in our content, which is goal-wise design, is not just an approach to optimize, yet another dimension of design, another defination of design. Famous example would always come to the famous architectures, that would express the artist's own personal emotions, or create a atmosphere or general concept of a certine implementation. Eiffel Tower, shakespears, they are all designed to express their authors' thesis, prefrence and believes.  People would doubt that expression should also be categorized into optimization, however that holds false. As expression can not be valued, measured but only subjectively judged, which has no significant meaning to be optimized. </p>
                    <p>Design towards expression happens also alot in games. Especially with those zero talk just interaction games such as Inside and The Witness, or Stanley's Parable for contrast. This thesis stands even stronger when video game design is considered a general process, that forging both music, gameplay, visual, plot together into a general feeling that would evoke players interest. Just like this website is designed to express a feeling of simple, clean and neat, although it only contains visual and interactive content, it can be added other sense or dimension of content as well to help its expression.</p>
                    <p>That's for today. I am going to sleep. 28 hours Marathon tho lol.</p>
                </div>
                <br></br>
                <div className="article">
                    <h2 className="article-title">
                        27/3/2017 Analysis about <cite>Dark Souls</cite>
                    </h2>
                    <ArticleInfo time="27/3/2017" category={['Game','Design','Psychology']}></ArticleInfo>
                    <p>Today, I will try to disassemble dark souls series.Pros about it, or why I enjoy this game so much:</p>
                    <ul>
                        <li>Combat backbone/basic. Lets get out of the equipment system and magic system first. Just the combat. Players are placed with problems that the enemy will hit player to die for 3-6 hits, bosses then 2-3 hits. Enemies' attack is easy to dodge, parry and learn or get familiar with after practice.  Player can dodge, attack, but will have very high stalling penalty compared to other J-Action games like DMC, and this is what make each choice more valuable, since that <b>you may actually die very easily if you chose to attack where you actually should dodge</b>. Penalty. Then, there is yet another limitation: the stamina. It is the most important resource, and nearly the only resource, player will have to engage and win the combat. It will drain out after 2-5 attack depends on attack mode, or 4-6 dodge movement, means that after some actions, whatever you have achieved during the current combat, you have to have rest rather than continue the engage. It makes the player have to choose less aggressive way, otherwise player will certainly got punished by running out of stamina and die by 2-boss attack or unable to get out of crowds of creeps.  This seems simple, but in the real combat in the game, there are variations that make it endlessly funny and enjoyable.
                        </li>
                        <li>Combat variations. First, each combat contains two group, if we strictly speak in context of single player mode, that is the enemy and the player side. For the enemy side, the variations are mainly those points:
                            <ul>
                                <li>Weapons. It large weapon library offers over hundreds of different weapons with more than 30 set of different weapon animation. The result is in order <b>to effectively wield the weapon player will pay time to learn the weapon by engaging more enemies</b>, and the large set of weapons make player willing for and curious about finding out the feeling of each specific weapon, and its effectiveness towards different combat type.</li>
                                <li>Strategies. Unlike DMC-like action game, dark souls offers very large set of different strategies for real time combat by offering the magic system and many useful tools/items. Through which, following strategies will be UNLOCKED: Stealth, sniping/shooting, magic-enhancing melee.</li>
                            </ul>
                        </li>
                        <li>LEVELS. Levels in dark souls are dominatingly complex and enchanting. What makes it stands out is: 
                            <ul>
                                <li>Traps. Trapping the player is a design methods that, instead of make things easier for players to explore and progress the game, they design the level to make player feels being set up, or tricked, or surprised. This is an ancient level design method which is gradually considered too tough for the new player group, and denounced by the recent 3A games like assassin's creed series or resident evil series. This methods <b>re-invoke the eager of mastering the level of core players</b>, and eventually even invoke many video game newbies. There are actually way more trap than you can imagine in the first Dark souls game.</li>
                                <li>Seamless and organic Map. Seamless map contributes more to the entire experience fullness, but the 'organic', I mean, is more technically a masterpiece of designing.  The game will have not only one routine to achieve the final goal, and many of the routine can be skipped or, early accessed. To beat the final boss the game requires only 40% of its actual map contents being played, unlike typical linear footage RPG games such as dragon age and mass effect,  it is more 'open-world'. Also the way it handle the traditional 'save points' is way creative, that most of the time player are gaining new 'save points' by open a short cut path to the last save points, such shorten the distance to the next small level.</li>
                            </ul>
                        </li>
                        <li>STORY-TELLING. Surprised huh? Dark souls are way ahead its co-competitents through lot of aspects, or at least more creative. The story telling system, actually does not even exist in dark souls. Players are indicated that story of the game is lied within the whole word, <b>through weapon/armor descriptions, through appearances of both enemies and allies, through those vague and GRE-like dialogues, and through the whole environment</b>. It is the exact opposite way of story telling when compared with those pre-market-dominating RPGs, namely The Witcher, Fall out or Final Fantasies, that Dark souls encourage players to literally 'FIND' the truth of story instead of being told or guided through. <b>It, not only offers another content of 'discovering truth', also greatly arouse players' curiosity and increase the replayablity of the game</b>. 'Lores' is even a independent section of the dark souls wiki, and many of truths, are still under discussion or guessing as the game really didn’t showed up them, intendedly no unique answer to those all mysterious questions. </li>
                    </ul>
                    <p>	In fact, only one of the bolded-feature I mentioned above could already have made a game shining out through piles of its similar replacements, but Dark Souls implemented them ALL. And the music, the story and art, animation quality they are all very well produced. The composed result is a intense, curiosity fulfilling, unique and beautiful dark-journey. It would fit anyone who knows that video games are creating experience.
                    </p>
                </div>
                <br></br>
                <div className="article">
                    <h2 className="article-title">
                        12/3/2017 Thoughts note about <cite>The Republica</cite>
                    </h2>
                    <ArticleInfo time="12/3/2017" category={['Reading','Logic']}></ArticleInfo>
                    <p>Well, today is already the second day since I started read The Republic by Plato. I am still in the introduction section of the book written by the translator, who really did a good analysis of the book. After each character is briefly sketched, our translator summed up some scenes in simple abstraction, and one of them, or the very beginning of them is interesting: 
                    </p>
                    <p>
                    <cite>
                    The admission is elicited from him that the just man seeks to gain an advantage over the unjust only, but not over the just, while the unjust would gain an advantage over either. Socrates, in order to test this statement, employs once more the favorite analogy of the arts. The musician, doctor, skilled artist of any sort, does not seek to gain more than the skilled, but only more than the unskilled (that is to say, he works up to a rule, standard, law, and does not exceed it), whereas the unskilled makes random efforts at excess. Thus the skilled falls on the side of the good, and the unskilled on the side of the evil, and the just is the skilled, and the unjust is the unskilled.
                    </cite>
                    Plato. The Republic (Kindle の位置No.359-363).  . Kindle 版. 
                    </p>
                    <p>
                        After which Plato decide our poor Thrasymachus as the defeated in the debate ( a rare brush showed up in his face ). However I doubt the logic here. Although it is only a metaphor introduced by Socrates, I consider it improper: Socrates defines, or presumes that (1) 'gain more' equals to the concept of 'gain advantage'. (2) 'Excess of a certain rule, standard or law' equals 'gain advantage'. (3) The unskilled makes random efforts to exceed the rule, standard or law. These three presumptions must hold true otherwise the metaphor from Socrates will fail in its irrelevancy.  
                    </p>
                    <p>
                        The first presumption alternation is surely tricky. What meant by Thrasymachus is the unjust would use every possible way to attain their objects while the just will not. Whilst 'gain advantage' to 'gain more' is for sure inequivalent, as one is for 'take from the other and do bad things on', the other means 'more valuable.'
                    </p>
                    <p>
                        The second presumption, however, basically is not plausible. But still, an excess commission does not need to be a situation that will be judged unjust. What is embedded within is the rule, standard and the law forged by the skilled are already the boundary of just and unjust, and this statement will only hold true if the skilled are the ruler, or gods (in Christian), which is apparently doubtful.
                    </p>
                    <p>
                        The last one, is merely a subjective judgement by the contemporary  society or Socrates himself, and is not a true statement at all other time. The unskilled could be content with their current situation and choose not to break into any unjust behavior.  
                    </p>
                    <p>
                        The above analysis by myself, are all, however,  useless. The translator mentioned a point which I to great extend agree: one shall not consider the dialogues and situation, metaphors conducted in the book chronically nor practically, as they are not 'happened', they themselves are metaphor, or saying logical uninitialized. 
                    </p>
                </div>
            </div>
        )
        return (
            <div className="section-content thoughts" >
                {thoughtContents}
            </div>
        )
    }
}

class ArticleInfo extends React.Component{
    render(){
        var categoryString='';
        var root=this;
        if(this.props.category && this.props.category.length){
            this.props.category.forEach(function(item,i){
                categoryString+=item;
                if(i<root.props.category.length-1){
                    categoryString+=' / ';
                }
            })
        }
        return(
            <p className="article-info">
                {this.props.time && <span className="article-time">{this.props.time}</span>}
                {categoryString && <span className="article-category">{categoryString}</span>}
            </p>
        )
    }
}


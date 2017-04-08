import React from 'react';

export default class ThoughtsSection extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var thoughtContents=(
            <div className="content-wrapper">
                <div className="article">
                    <h2 className="article-title">
                        12/3/2017 thoughts note about <cite>The Republica</cite>
                    </h2>
                    <ArticleInfo time="12/3/2017" category={['Reading','Logic']}></ArticleInfo>
                    <p>Well, today is already the second day since I started read The Republic by Plato. I am still in the introduction section of the book written by the translator, who really did a good analysis of the book. After each character is briefly sketched, our translator summed up some scenes in simple abstraction, and one of them, or the very beginning of them is interesting: 
                    </p>
                    <br></br>
                    <p>
                    <cite>
                    The admission is elicited from him that the just man seeks to gain an advantage over the unjust only, but not over the just, while the unjust would gain an advantage over either. Socrates, in order to test this statement, employs once more the favorite analogy of the arts. The musician, doctor, skilled artist of any sort, does not seek to gain more than the skilled, but only more than the unskilled (that is to say, he works up to a rule, standard, law, and does not exceed it), whereas the unskilled makes random efforts at excess. Thus the skilled falls on the side of the good, and the unskilled on the side of the evil, and the just is the skilled, and the unjust is the unskilled.
                    </cite>
                    Plato. The Republic (Kindle の位置No.359-363).  . Kindle 版. 
                    </p>
                    <br></br>
                    <p>
                        After which Plato decide our poor Thrasymachus as the defeated in the debate ( a rare brush showed up in his face ). However I doubt the logic here. Although it is only a metaphor introduced by Socrates, I consider it improper: Socrates defines, or presumes that (1) 'gain more' equals to the concept of 'gain advantage'. (2) 'Excess of a certain rule, standard or law' equals 'gain advantage'. (3) The unskilled makes random efforts to exceed the rule, standard or law. These three presumptions must hold true otherwise the metaphor from Socrates will fail in its irrelevancy.  
                    </p>
                    <br></br>
                    <p>
                        The first presumption alternation is surely tricky. What meant by Thrasymachus is the unjust would use every possible way to attain their objects while the just will not. Whilst 'gain advantage' to 'gain more' is for sure inequivalent, as one is for 'take from the other and do bad things on', the other means 'more valuable.'
                    </p>
                    <br></br>
                    <p>
                        The second presumption, however, basically is not plausible. But still, an excess commission does not need to be a situation that will be judged unjust. What is embedded within is the rule, standard and the law forged by the skilled are already the boundary of just and unjust, and this statement will only hold true if the skilled are the ruler, or gods (in Christian), which is apparently doubtful.
                    </p>
                    <br></br>
                    <p>
                        The last one, is merely a subjective judgement by the contemporary  society or Socrates himself, and is not a true statement at all other time. The unskilled could be content with their current situation and choose not to break into any unjust behavior.  
                    </p>
                    <br></br>
                    <p>
                        The above analysis by myself, are all, however,  useless. The translator mentioned a point which I to great extend agree: one shall not consider the dialogues and situation, metaphors conducted in the book chronically nor practically, as they are not 'happened', they themselves are metaphor, or saying logical uninitialized. 
                    </p>
                </div>
            </div>
        )
        return (
            <div className="section-content thoughts">
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


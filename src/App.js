import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {SocialMediaIconsReact} from 'social-media-icons-react';
const colors= ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
const API= 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
const filler ={
  "quote":"Life isn’t about getting and having, it’s about giving and being.","author":"Kevin Kruse"}
class App extends React.Component {
  constructor(props) {
    super(props);
         this.state={
     
        color:colors,
        quotes:[filler],//this was added so that the twitter url does not give us error that quotes is null
        index:0,
        colorIndex:0
      }
    }
    toogleAppear=()=>{
      this.setState({
        appearCard: !this.state.appearCard
      })
    }
    componentDidMount(){
      fetch(API).then(res=> res.json()).then(res=>{this.setState({quotes:res.quotes}, this.getRandomIndex);
        this.getRandomColorIndex();
    });
   
    }
    getRandomIndex= () =>{
      const {quotes}= this.state;
      if(quotes.length>0){
        const index= Math.floor(Math.random()*quotes.length);
        this.setState({
          index:index
        })
      }
     }
     getRandomColorIndex= () =>{
      const {color}= this.state;
      if(color.length>0){
        const index2= Math.floor(Math.random()*color.length);
        this.setState({
          colorIndex:index2
        })
      }
     }
     
    
render(){
  const{quotes, index,colorIndex,color}= this.state;
  const quote= quotes[index];
  const colorChoosen=color[colorIndex];
  const styleObj={
    background:colorChoosen
  } 
  const tweetURl= `https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`;
return (
 
  <body style={styleObj} className="container">
    <div className="blockquote-wrapper"id="quote-box">
    
     <section id="quote-machine" className="centered">
      <div id="title">
         <h1 className="title">Random Quote Machine</h1> 
      </div>
        {quote && <p className="card-text" id="text">{quote.quote}</p>}
        {quote && <h2 className="card-title" id="author">{quote.author}</h2>}
         <div className="d-flex justify-content-between" id="buttons">
<button  type="button" id="new-quote" onClick={() => { this.getRandomIndex(); this.getRandomColorIndex(); this.toogleAppear();}} className="btn btn-primary">Next quote </button>      
       <SocialMediaIconsReact url={tweetURl} id="tweet-quote" borderColor={colorChoosen} borderWidth="5" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor={colorChoosen} iconSize="5" roundness="20%"  size="50" />
         </div>    
          </section>
   
      </div>
</body>

);}
}

//<a href={tweetURl} id="tweet-quote">Tweet</a> This is to chave 12 out of 12 on the FFC project. Replace other twitter icon
/*function App() {
  return (
    <body>
    <section id="quote-machine" class="centered">
        <div id="title">
           <h1 className="title">Random Quote Machine</h1> 
        </div>
        <div id="quote-box" class="card">
            <p className="card-text" id="text"></p>
            <h2 className="card-title" id="author"></h2>
            <button  type="button" id="new-quote" className="btn btn-primary">Next quote</button>
            <a id="tweet-quote"></a>
           
        </div>
        </section>
</body>
    
  );
}*/


export default App;

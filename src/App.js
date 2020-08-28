import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Button from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import { render } from '@testing-library/react';
const colors= ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
const API= 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
class App extends React.Component {
  constructor(props) {
    super(props);
         this.state={
      color:colors,
        quotes:[],
        index:0,
        colorIndex:0
      }
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
          index
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
        <button  type="button" id="new-quote" onClick={() => { this.getRandomIndex(); this.getRandomColorIndex()}} className="btn btn-primary">Next quote</button>      
         <button className="btn btn-primary" id="tweet-quote">Tweet</button></div>    
      </section>
      </div>
</body>

);}
}


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

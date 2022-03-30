import React, { Component } from 'react'
import '../../css/puzzleOne.css';
import  LinksBoven  from '../../img/PuzzelStukjes/Linksboven.png'
import  LinksOnder  from '../../img/PuzzelStukjes/Linksonder.png'
import  Midden  from '../../img/PuzzelStukjes/Midden.png'
import  Rechtsboven  from '../../img/PuzzelStukjes/Rechtsboven.png'
import  Rechtsmidden  from '../../img/PuzzelStukjes/Rechtsmidden.png'
import  Rechtsonder  from '../../img/PuzzelStukjes/Rechtsonder.png'
import { FaInfoCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'

export class DragAndDrop extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0,
      buttonText: "Toon button olifanten verblijf"
    }
}

componentDidMount = () => {
  let showSolutionOverlay = document.getElementById("startPopUpSolution");
  showSolutionOverlay.style.display = "none";
}




hideOverLay(){
    let hideDiv = document.getElementById("overlay");
    let hidePopUp = document.getElementById("startPopUp");
    let zooKeeper = document.getElementById("zookeeper-div2");
    hideDiv.style.display = "none";
    hidePopUp.style.display = "none";
    zooKeeper.style.display = "flex";
}

hideInfo(){
  let hideDiv = document.getElementById("infoPopUp");
  hideDiv.style.display = "none";
}

openInfo(){
  let hideDiv = document.getElementById("infoPopUp");
  hideDiv.style.display = "flex";
}

allowDrop = (e) => {
  e.preventDefault();
}

drag = (e) => 
{
  e.dataTransfer.setData("content",e.target.id);
}

drop = (e) =>
{
  e.preventDefault();
        var image =e.dataTransfer.getData("content");
  if (e.target.id === document.getElementById(image).getAttribute('data-div')){       
      e.target.appendChild(document.getElementById(image));
      let changeOpacity = document.getElementById(e.target.id);
      changeOpacity.style.opacity = "1";
      this.setState({count : this.state.count + 1})
      console.log(this.state.count);

      if(this.state.count === 5){
        let showSolutionOverlay = document.getElementById("startPopUpSolution");
        showSolutionOverlay.style.display = "block";
      }
  }
  else{
     alert("Dat is helaas niet goed, probeer het nog een keer!");
  }
}

hideSolutionDiv = () => {
  let showButton = document.getElementById("buttonOlifanten");
  let showSolutionOverlay = document.getElementById("startPopUpSolution");
  showSolutionOverlay.style.display = "none";
  showButton.style.display = "block";
}

handleAnswer = (answerNumber) => {
  let onjuist = document.getElementById("antwoordenGroep-onjuist");
  let juist = document.getElementById("antwoordenGroep-juist");
  let antwoordenGroepButton = document.getElementById("button-group-second");

  if(answerNumber === 1){
    this.setState({ textAnswers : "met CTRL + SHIFT + N open je privé scherm."})
    onjuist.style.display = "block";
    juist.style.display = "none";
  }if(answerNumber === 2){
    this.setState({ textAnswers : "met CTRL + N open je een geheel nieuw scherm."})
    onjuist.style.display = "block";
    juist.style.display = "none";
  }if(answerNumber === 3){
    onjuist.style.display = "none";
    juist.style.display = "block";
    antwoordenGroepButton.style.display = "block";
  }
}


  render() {
    return (
      <section className="mapPuzzle">
          <div className="hintButton" onClick={() => {this.openInfo()}}>
            <FaInfoCircle className="buttonHint" />
          </div>


            <div className="infoPopUp" id="infoPopUp">
                <div className="intro-kaartPuzzle">
                    <h1 className="headerOne">
                        Ik krijg de kaart niet opgelost?
                    </h1>
                    <p>Kijk goed naar de afbeeldingen op de stukken en zoek op de kaart de juiste plaatje.</p>
                    <div className="buttonGroup">
                        <button className="button" onClick={() => {this.hideInfo()}}>Ga verder</button>
                    </div>
              </div>
            </div>



          <div className="overlay" id="overlay">hiddentext</div>
            <div className="startPopUp" id="startPopUp">
                <div className="intro-kaartPuzzle">
                    <h1 className="headerOne">
                        De kaart lig in stukken..
                    </h1>
                    <p>Voordat we weten hoe we bij het olifanten verblijf komen, moeten we de stukje aan elkaar leggen.</p>
                    <div className="buttonGroup">
                        <button className="button" onClick={() => {this.hideOverLay()}}>Los op!</button>
                    </div>
              </div>
          </div>

          <div className="overlay" id="overlaySolution">hiddentext</div>
            <div className="startPopUp" id="startPopUpSolution">
                <div className="intro-kaartPuzzle">
                    <h1 className="headerOne-solution">
                        Goed gedaan je hebt de kaart opgelost!
                    </h1>
                    <p>Om naar het olifanten verblijf te gaan moet de volgende vraag worden beantwoord.</p>
                    <p>Met welke control toets op je toetsenbord open je een nieuw tablad</p>
                    <div className="antwooordenGroep">
                        <div className="antwoordenGroep-buttons">
                          <button className="button-answer" onClick={() => this.handleAnswer(1)}>CTRL + SHIFT + N</button>
                          <button className="button-answer" onClick={() => this.handleAnswer(2)}>CTRL + N</button>
                          <button className="button-answer" onClick={() => this.handleAnswer(3)}>CTRL + T</button>
                        </div>
                        <p className="antwoordenGroep-juist" id="antwoordenGroep-juist">Dat is goed met CTRL + T kan je een nieuw tablad openen in je scherm!</p>
                        <p className="antwoordenGroep-onjuist" id="antwoordenGroep-onjuist">Helaas dat is niet goed {this.state.textAnswers}</p>
                    </div>
                    <div className="button-group-second" id="button-group-second">
                      <button className="button-primary" onClick={() =>  this.hideSolutionDiv()}>{this.state.buttonText}</button>
                    </div>
              </div>
          </div>

          
          <div className="board">
            <div><img src={LinksBoven} id="div1" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)} /></div>
            <div><img src={Midden}  id="div2" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)} /></div>
            <div><img src={Rechtsboven} id="div3" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}/></div>
            <div><img src={LinksOnder} id="div4" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}/></div>
            <div><img src={Rechtsmidden} id="div5" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}/></div>
            <div><img src={Rechtsonder} id="div6" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}/></div>
          </div>

          <div className="puzzelstukjes">
            <img id="drag1" data-div="div1" src={LinksBoven} draggable="true" onDragStart={(event) => this.drag(event)}/>
            <img id="drag2" data-div="div4" src={LinksOnder} draggable="true" onDragStart={(event) => this.drag(event)}/>
            <img id="drag3"  data-div="div2" src={Midden} draggable="true" onDragStart={(event) => this.drag(event)}/>
            <img id="drag4"  data-div="div5" src={Rechtsmidden} draggable="true" onDragStart={(event) => this.drag(event)}/>
            <img id="drag5"  data-div="div3" src={Rechtsboven} draggable="true" onDragStart={(event) => this.drag(event)}/>
            <img id="drag6"  data-div="div6" src={Rechtsonder} draggable="true" onDragStart={(event) => this.drag(event)}/>
          </div>
         
         <div className="buttonOlifanten" id="buttonOlifanten">
           <Link to="/elephantEntry" className="secondary" >Ga naar het olifanten verblijf!</Link>
         </div>
      </section>
     
    )
  }
}

export default DragAndDrop;
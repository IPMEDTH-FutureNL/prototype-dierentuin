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
    }
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
        let showButton = document.getElementById("buttonOlifanten");
        showButton.style.display = "block";
      }
  }
  else{
     alert("Dat is helaas niet goed, probeer het nog een keer!");
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
import React, { Component } from 'react'
import '../../css/puzzleOne.css';
import zookeeperImage from '../../img/zookeeper.png'
import textCloud from '../../img/textCloud.png'

import { Link } from 'react-router-dom'

export class OvergangPuzzelEen extends Component {
  constructor(props){
      super(props);
      this.state = {
        count : 0,
        text : "Oh nee, het hek! Waar is mijn sleutel?",
        buttonText : "Verder"
      }
  }

  componentDidMount = () => {
    document.getElementById('newLink').style.display = "none";
  }


  hideOverLay(){
      let hideDiv = document.getElementById("overlay");
      let hidePopUp = document.getElementById("startPopUp");
      let zooKeeper = document.getElementById("zookeeper-div2");
      hideDiv.style.display = "none";
      hidePopUp.style.display = "none";
      zooKeeper.style.display = "flex";
  }


    handleClick = () => {
        console.log("handleClick");
        this.setState({ count : this.state.count + 1});
        switch(this.state.count){
          case 0:
            this.setState({text : "Ik heb mijn sleutel niet, de sleutel ligt nog in het olifanten verblijf."});
            break;
          case 1: 
            this.setState({text : "Hier heb je mijn kaart dan moet je het olifanten verblijf kunnen vinden."});
            this.setState({buttonText : "Pak kaart"});
            document.getElementById('forState').style.display = "none";
            document.getElementById('newLink').style.display = "block";
            break;
      }
    }
  

  render() {
    return (
        <section className="puzzleOne">
            <div className="overlay" id="overlay">hiddentext</div>
            <div className="startPopUp" id="startPopUp">
                <div className="text">
                    <h1 className="headerOne">
                        Dang....
                    </h1>
                    <p>Het hek van de dierentuin valt achter je dicht!</p>
                    <p>Hoe komen we hier nu uit?</p>
                    <div className="buttonGroup">
                        <button className="button" onClick={() => {this.hideOverLay()}}>Schud aan het hek</button>
                        <button className="button" onClick={() => {this.hideOverLay()}}>Roep om hulp</button>
                    </div>
                </div>
            </div>
            <div className="zookeeper-div2" id="zookeeper-div2">
                <img className="zookeeper-img" src={zookeeperImage}/>
                <img className="text-cloud" src={textCloud} />
                <div className="textCloud-innertext">
                <p className="text">{this.state.text}</p>
                <button className="button-primary" id="forState" onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <Link className="button-primary link" id="newLink" to="/puzzleMap">{this.state.buttonText}</Link>
                </div>
          </div>
        </section>
    )
  }
}

export default OvergangPuzzelEen
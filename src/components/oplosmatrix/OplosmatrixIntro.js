//intro
import React, { Component } from 'react';
import '../../css/oplosmatrixIntro.css';
import zookeeperImage from '../../img/zookeeper.png'
import textCloud from '../../img/textCloud.png'

export class OplosmatrixIntro extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            text : "Nog een slot?! Jullie zijn nu wel de experts.",
            buttonText : "Verder" 
        }
    }

    handleClick = () =>{
        this.setState({ count : this.state.count + 1});
        switch(this.state.count){
            case 0:
                this.setState({text : "Kraak het slot terwijl ik de olifanten afleid."});
                break;
            case 1:
                window.location.href="/oplosmatrix";
        }
    }
    
    render(){
        return(
            <section className='introDiv'>
                <section className='oplosmatrixintro'>
                    <div className='zookeeper-div'>
                        <img className='zookeeper-img' src = {zookeeperImage}/>
                        <img className='text-cloud' src = {textCloud} />
                        <div className='textCloud-innertext'>
                            <p className='text'>{this.state.text}</p>
                            <button className="button-primary" onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}

export default OplosmatrixIntro
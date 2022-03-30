//main page
import React, { Component } from 'react';
import '../../css/oplosmatrix.css';
import Lock from '../../img/lock.png'
import Hintpaper from '../../img/ripped-paper.png'
import Notepaper from '../../img/torn-paper.png'

export class Oplosmatrix extends Component{

    handleClickLock = () =>{
        window.location.href = '/oplosmatrixLock';
    }
    handleClickNote = () =>{
        window.location.href = '/oplosmatrixNote';
    }
                
    handleClickHint = () =>{
        window.location.href = '/oplosmatrixHint';     
    }

    render(){
        return(
            <section className='oplosmatrix'>
                <section className='clickable-lock' onClick={()=> this.handleClickLock()}>
                    <img className='lock'src={Lock}></img>
                </section>
                <section className='clickable-note' onClick={()=> this.handleClickNote()}>
                    <img className='notepaper' src={Notepaper}></img>
                </section>
                <section className='clickable-hint' onClick={()=> this.handleClickHint()}>
                    <img className='hintpaper' src={Hintpaper}></img>
                </section>

            </section>
        )
    }
}

export default Oplosmatrix

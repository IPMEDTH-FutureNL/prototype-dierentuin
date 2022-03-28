//main page
import React, { Component } from 'react';
import '../../css/oplosmatrix.css';

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
            <section className=''>
                <section className='clickable-lock' onClick={()=> this.handleClickLock()}>
                    slot
                </section>
                <section className='clickable-note' onClick={()=> this.handleClickNote()}>
                    note
                </section>
                <section className='clickable-hint' onClick={()=> this.handleClickHint()}>
                    hint
                </section>

            </section>
        )
    }
}

export default Oplosmatrix
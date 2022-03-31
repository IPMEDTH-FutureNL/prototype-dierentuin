//oplosmatrix puzzel
import React, { Component } from 'react';
import '../../css/oplosmatrixNotes.css';
import elephantIcon from'../../img/elephantIcon.png';
import tigerIcon from'../../img/tigerIcon.png';
import monkeyIcon from'../../img/monkeyIcon.png';
import { useNavigate } from 'react-router-dom';

const OplosmatrixNotes = () => {
    const navigate = useNavigate();

    returnMainScreen = () =>{
        navigate("/oplosmatrix")
    }

        return(
            <section className='note'>
                <section className='note-center'>
                    <div className='oplosmatrix-grid'>
                        <div className='grid-item-blank'></div>
                        <div className='grid-item-img'>
                            <img className='icon' src={elephantIcon}></img>
                        </div>
                        <div className='grid-item-img'>
                            <img className='icon' src={tigerIcon}></img>
                        </div>
                        <div className='grid-item-img'>
                            <img className='icon' src={monkeyIcon}></img>
                        </div>

                        <div className='grid-item-color-red'/>
                        <div className='grid-item-number'>1</div>
                        <div className='grid-item-number'>7</div>
                        <div className='grid-item-number'>5</div>

                        <div className='grid-item-color-blue'/>
                        <div className='grid-item-number'>6</div>
                        <div className='grid-item-number'>3</div>
                        <div className='grid-item-number'>9</div>

                        <div className='grid-item-color-yellow'/>
                        <div className='grid-item-number'>2</div>
                        <div className='grid-item-number'>8</div>
                        <div className='grid-item-number'>4</div>

                    </div>
                </section>
                <button className='exitButton' onClick={this.returnMainScreen}>x</button>
            </section>
            
        )
}

export default OplosmatrixNotes

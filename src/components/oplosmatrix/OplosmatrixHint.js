//hint voor oplosmatrixpuzzel
import React, { Component } from 'react';
import '../../css/oplosmatrixHint.css';
import { useNavigate } from 'react-router-dom';

const OplosmatrixHint = () => {
    const navigate = useNavigate();

    const returnMainScreen = () =>{
        navigate("/oplosmatrix");
    }


    
        return(
            <section className='oplosmatrixHint'>
                <p className='titel'>Voeding dieren:</p>
                <p className='elephants'>Olifanten: 160 kilo gras</p>
                <p className='tigers'>Tijgers: 7 kilo vlees</p>
                <p className='monkeys'>Apen: 4 bananen</p>
                {/* img with solution */}
               
                <button className='exitButton' onClick={() => returnMainScreen()}>x</button>
            </section>
        )
  
}

export default OplosmatrixHint
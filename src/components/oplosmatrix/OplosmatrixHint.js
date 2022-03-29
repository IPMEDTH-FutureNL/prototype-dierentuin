//hint voor oplosmatrixpuzzel
import React, { Component } from 'react';
import '../../css/oplosmatrixHint.css';

export class OplosmatrixHint extends Component{

    returnMainScreen = () =>{
        window.location.href= ("/oplosmatrix")
    }


    render(){
        return(
            <section className='oplosmatrixHint'>
                <p className='titel'>Voeding dieren:</p>
                <p className='elephants'>Olifanten: 160 kilo gras</p>
                <p className='tigers'>Tijgers: 7 kilo vlees</p>
                <p className='monkeys'>Apen: 4 bananen</p>
                {/* img with solution */}
               
                <button className='exitButton' onClick={this.returnMainScreen}>x</button>
            </section>
        )
    }
}

export default OplosmatrixHint
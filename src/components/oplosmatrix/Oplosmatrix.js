//main page
import React, { Component } from 'react';
import '../../css/oplosmatrix.css';
import Lock from '../../img/lock.png'
import Hintpaper from '../../img/ripped-paper.png'
import Notepaper from '../../img/torn-paper.png'
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



const Oplosmatrix = () => {
    const navigate = useNavigate();

    const handleClickLock = () =>{
        navigate('/oplosmatrixLock');
    }
    const handleClickNote = () =>{
        navigate('/oplosmatrixNote');
    }
                
    const handleClickHint = () =>{
        navigate('/oplosmatrixHint');     
    }

    const hideInfo = () => {
        let hideDiv = document.getElementById("infoPopUp");
        hideDiv.style.display = "none";
      }
      
    const openInfo = () => {
        let hideDiv = document.getElementById("infoPopUp");
        hideDiv.style.display = "flex";
    }

 
        return(
            <section className='oplosmatrix'>
                 <div className="hintButton" onClick={() => {openInfo()}}>
                    <FaInfoCircle className="buttonHint" />
                </div>
                <div className="infoPopUp" id="infoPopUp">
                    <div className="intro-kaartPuzzle">
                        <h1 className="headerOne">
                            Ik krijg de matrix niet opgelost?
                        </h1>
                        <p>Klik nog een keer op het blaadje waar de voeding van de dieren op staat. Kijk daar goed naar de kleur van de tekst.
                           Schrijf de kleur op, op een blaadje. Zet dan achter de kleur welk dier dat was. Kijk daarna naar de matrix en kijk naar de kleur 
                           aan de linkerkant van de matrix en naar de dieren op de matrix. Gebruik dit als voorbeeld: dier: olifant, kleur: geel is cijfer 2.
                           Los zo het raadsel op!
                        </p>
                        <div className="buttonGroup">
                            <button className="button" onClick={() => {hideInfo()}}>Ga verder</button>
                        </div>
                    </div>
                </div>
                <section className='clickable-lock' onClick={()=> handleClickLock()}>
                    <img className='lock'src={Lock}></img>
                </section>
                <section className='clickable-note' onClick={()=> handleClickNote()}>
                    <img className='notepaper' src={Notepaper}></img>
                </section>
                <section className='clickable-hint' onClick={()=> handleClickHint()}>
                    <img className='hintpaper' src={Hintpaper}></img>
                </section>

            </section>
        )
    
}

export default Oplosmatrix

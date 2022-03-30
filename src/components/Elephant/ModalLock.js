import React from 'react'
import { useNavigate } from "react-router-dom";

const ModalLock = () => {

    const navigate = useNavigate();

    const checkValue = () => {
        const inputValue = document.getElementById("number").value;
        if(inputValue == 343){
            console.log('Code gekraakt!!!')   
            navigate("/elephantEnd")

        } else {
            alert('Jammer dat is niet de code :(')
        }
    }

  return (
    <section className="modal-lock-section">
        <label className="modal-lock-section-label" htmlFor="lname">Oei, hij lijkt op slot. Wat zou de driecijferige code zijn?</label> <br/>
        <input className="modal-lock-section-el input" type="number" id="number" name="number"/> <br/>
        <button className="modal-lock-section-el btn" onClick={checkValue}> Kraak de code</button>
        <p className="modal-lock-section-label text-red">Tip: Los de vragen op, die op het blaadje ergens in dit verblijf geschreven zijn. Deze drie vragen vormen een code!</p>
    </section>
  )
}

export default ModalLock
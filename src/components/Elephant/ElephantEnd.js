import React from 'react'
import { useNavigate } from "react-router-dom";

import elephantEnd from '../../img/elephantEnd.png'

const ElephantEnd = () => {

    const navigate = useNavigate(); 

    const wrong = () => {
        alert('Dat is niet de juiste voedsel!')
    }

    const right = () => {
        navigate("/oplosmatrixIntro") //ROUTE VAN NILESH
    }

  return (
    <div className="background absolute">
        <img className="elephant-end" src={elephantEnd}/>
        <section className="elephant-food">
            <h2>Leid de olifant af door hem wat te eten te geven</h2>
            <ul className="elephant-food-list">
                <li className="elephant-food-listitem" onClick={wrong}>Vlees</li>
                <li className="elephant-food-listitem" onClick={right}>Fruit</li>
                <li className="elephant-food-listitem" onClick={wrong}>Chocola</li>
            </ul>
        </section>
    </div>
  )
}

export default ElephantEnd
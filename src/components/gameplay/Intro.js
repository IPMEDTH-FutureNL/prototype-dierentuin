import React, { Component } from 'react'
import '../../css/intro.css';
import { Link } from 'react-router-dom'

export class Intro extends Component {

    componentDidMount = () => {
        let start = new Date();
        let minutes = start.getMinutes();
        localStorage.setItem("userTime", minutes);
        console.log(minutes);
    }

    
  render() {
    return (
      <div className="introEscape">
          <div className="introText">
              <h1 className="headerOne">
                  Welkom bij de dierentuin escape!
              </h1>
              <p>Los zo snel mogelijk de puzzels op om de meeste punten te behalen!</p>
              <Link className='btn-primary' to="/start">Begin met de escape</Link>
          </div>

      </div>
    )
  }
}

export default Intro
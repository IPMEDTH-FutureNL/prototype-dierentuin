import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
 return(
   <Router>
     <div className="App">
      <Routes>
        <Route path="/" element ={<Start></Start>} />
      </Routes>
     </div>
  </Router>
 )
}

export default App;

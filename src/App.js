import React,{} from 'react'
import {Route ,BrowserRouter as Router ,Switch ,Link} from 'react-router-dom'
import './App.css';
import boxShadow from './BoxShadow'
import Unsplash from './Unsplash'
import Jokes from './Jokes'
import Darkmode from './Darkmode'
import Home from './Home'

function App() {
 
  return (
    <Router className="App">
      <h1>Mini Projects</h1>
     <div className="mini-project">
       <table>
       <th><Link to='/'>home </Link></th>
       <th><Link to='/unsplash'>Unsplash Project </Link></th>
       <th><Link to='/jokes'>Jokes project </Link></th>
       <th><Link to='/Darkmode'>Dark mode  Project</Link></th>
       
       <th><Link to='/boxshadow'>Box - Shadow </Link></th>
       </table>
       <br/>
       <Switch>
        <Route exact path="/"  component={Home} />
        <Route path="/boxshadow" component={boxShadow}/>
        <Route path="/jokes" component={Jokes} />
        <Route path="/unsplash" component={Unsplash} />
        <Route path="/Darkmode" component={Darkmode} />
      
      </Switch>
     
     </div>
     
    </Router>
  );
}

export default App;

import React,{useState ,useEffect} from 'react'
import './Darkmode.css';

function App() {
 
  const getmode=()=>{
     return JSON.parse( localStorage.getItem("mode"))||false
  }
  const [dark, setdark] = useState(getmode())
  
  useEffect(() => {
   localStorage.setItem("mode",JSON.stringify(dark))
   return () => {
   }
   }, [dark])
  
  return (
    <div className={dark? "App dark_mode":"App" }>
    <div className="nav">
      <label class="switch">
      <input type="checkbox"
      checked={dark}
      onChange={()=>setdark(!dark)}
      />
      <span class="slider round"></span>
      </label>
    </div>

    <div className="content">
      <h1>Bikesh Verma World</h1>
      <h3>{dark ? "dark mode is ON": "dark mode is OFF"}</h3>
      <p>this is just a dark mode web application</p>
      <h5>if you want to see dark mode then press on toggle button</h5>
    </div>
    </div>
  );
}

export default App;

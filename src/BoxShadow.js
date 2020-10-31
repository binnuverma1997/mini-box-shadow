import React,{useState} from 'react';
import './BoxShadow.css';

function App() {
  const [Hori, setHori] = useState(10)
  const [Veri, setVeri] = useState(10)
  const [Blur, setBlur] = useState(10)
  const [Color, setColor] = useState("black")
  const [Checkon, setCheck] = useState(false)


  return (
    <div className="App">
     
      <div className="controls">
      <label>Horizental</label>
      <input type="range"  min="-200" max="200"  value={Hori} onChange={(e)=>setHori(e.target.value)}/>
      <label>Vertical</label>
      <input type="range"  min="-200" max="200"  value={Veri} onChange={(e)=>setVeri(e.target.value)}/>
      <label>Blur</label>
      <input type="range"  min="0" max="200"  value={Blur} onChange={(e)=>setBlur(e.target.value)}/>
      <label>Color</label>
      <input type="color"  min="0" max="200"  value={Color} onChange={(e)=>setColor(e.target.value)}/> 
    
      <div className="switch">
     <label>
      outset
      <input type="checkbox"
      checked={Checkon}
      onChange={(e)=>setCheck (! Checkon)}
      />
      <span className="lever"></span>
      inset
    </label>
    </div>
    </div>
    
   
    <div className="output"></div>
    <div className="box" style={{boxShadow:`${Checkon?"inset":"" } ${Hori}px ${Veri}px ${Blur}px ${Color}` }}> 
      <div className='box__data'>
      Box Shadow {Hori}px {Veri}px {Blur}px  </div>
      </div>
      
     

    </div>
  );
}

export default App;

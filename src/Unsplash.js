import React ,{useState} from 'react'
import './Unsplash.css';

function App() {
  const [Value,setValue] = useState("")
  const [results, setResults] = useState([])
  const fetchImages=()=>{
      fetch(`https://api.unsplash.com/search/photos?client_id=NyNG5JZ4-Jo40TSGe_o74uwDfx97ZgBHjGlsS6RipvU&query=${Value}&orientation=squarish`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setResults(data.results)
    })
    }
  return (
    <div className="App">
       <div className="my__div">
        <span>Search</span>
        <input 
        type="text"
        value={Value}
        onChange={(e)=>setValue(e.target.value)}
        ></input>
        <button
        onClick={()=>fetchImages()}
        >Send</button>
        </div>
<br/>
        <div className="gallery">
         {
         results.map((item)=>{
           return <img key={item.id} src={item.urls.regular}/>
         })
         } 

        </div>
    </div>
  );
}

export default App;

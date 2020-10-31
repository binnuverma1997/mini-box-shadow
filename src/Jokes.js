import React ,{useState,useEffect } from 'react'
import './Jokes.css';

function App() {
  const [joke, setjoke] = useState("loading...")
  const [Fname, setFname] = useState("")
  const [Lname, setLname] = useState("")
  
  useEffect(() => {
  newjokes(Fname,Lname);
   }, [])

 const newjokes=(firstname,lastname)=>{
  fetch(`http://api.icndb.com/jokes/random?firstName=${firstname}&lastName=${lastname}`)
  .then(res=>res.json())
  .then(res1=>{
    console.log(res1);
    setjoke(res1.value.joke)
  })
 }

  return (
    <div className="App">
    <h2>JOKES </h2><br/>
      <label>First name</label>
      <input type="text"
      value={Fname}
      onChange={(e)=>setFname(e.target.value)}
      ></input>
        <label>Last name</label>
        <input type="text"
        value={Lname}
        onChange={(e)=>setLname(e.target.value)}></input>
  <h1>{joke}</h1>
  <button
  onClick={()=>newjokes(Fname,Lname)}

  >click here for next joke</button>
    </div>
  );
}

export default App;

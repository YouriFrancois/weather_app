
import './App.css';
import {api}from './Api'
import React,{useState} from 'react'

let click=true;

function App() {
const [data, setData] = useState({})
const [text, setText] = useState('');
const [deg, setDeg] = useState('units=imperial');


const change =()=> {
  click=!click;
  console.log("click "+click)
  if(click){setDeg('units=metric')}
  else{setDeg('units=imperial')}
  console.log('deg= '+deg)
  getapi()
}
const getapi =()=>{
fetch(`${api.base}${text}&${deg}&appid=${api.key}`)
.then(res => res.json())
.then(result => {
 setData(result);

});}

const getData = evt => {
  if (evt.key === "Enter"){
    getapi()
}
}


  return (
    <div className="App">
      <h1>Today Weather </h1>

 <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setText(e.target.value)}
            value={text}
            onKeyPress={getData}
          />
           change to ->  <button onClick={change}>{click?"*C":"*F"}</button>
        </div>

     

     {(typeof data.main != 'undefined')?
<div className="detail">
    <div className="detailBox">In       : {data.name}</div>
     <div className="detailBox">Temperature      : { Math.round(data.main.temp)}{click?"*F":"*C"}</div>
     <div className="detailBox">Description      : {data.weather[0].description}</div>
     <div className="detailBox">Temperature Min  : {Math.round(data.main.temp_min)}{click?"*F":"*C"}</div>
     <div className="detailBox">Temperature Max  : {Math.round(data.main.temp_max)}{click?"*F":"*C"}</div>
     <div className="detailBox">humidity         : {data.main.humidity}</div>
</div>
     :("enter city name")}

    </div>



  );
}

export default App;

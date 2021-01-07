
import './App.css';
import React,{useState} from 'react'


function App() {
const [data, setData] = useState({})
const [text, setText] = useState('');
const api= {
  base:"api.openweathermap.org/data/2.5/weather?zip=",
  key:"8251735ab44064559bf27836d96c9d42"
}

const getData = evt => {
  if (evt.key === "Enter"){
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api.key}`)
 .then(res => res.json())
 .then(result => {
  setData(result);
  setText('');
 });
}
}

  return (
    <div className="App">

 <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setText(e.target.value)}
            value={text}
            onKeyPress={getData}
          />
        </div>

     {(typeof data.main != 'undefined')?
<div>
    <div>In       : {data.name}</div>
     <div>Temperature      : {data.main.temp}</div>
     <div>description      : {data.weather[0].description}</div>
     <div>Temperature Min  : {data.main.temp_min}</div>
     <div>Temperature Max  : {data.main.temp_max}</div>
     <div>humidity         : {data.main.humidity}</div>
</div>
     :("enter city name")}

    </div>



  );
}

export default App;

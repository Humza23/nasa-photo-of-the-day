import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Header from './components/Header.js'
import Body from './components/Body.js'

function App() {
  const [nasaData, setNasaData] = useState(null)

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      console.log(res.data.url);
      setNasaData(res.data.url)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div className="App">
      <Header title='Welcome to NASA' />
      <Body image={nasaData}/>
    </div>
  );
}

export default App;

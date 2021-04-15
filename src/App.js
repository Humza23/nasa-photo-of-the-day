import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Header from './components/Header.js'
import Body from './components/Body.js'
import Footer from './components/Footer.js'

function App() {
  const [nasaData, setNasaData] = useState([])

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=9O0dOJ5Ji5xvsf6jJOY8PZEj4JluJGOYy8fpObgZ')
    .then(res => {
      console.log(res.data);
      setNasaData(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div className="App">
      <Header title={nasaData} />
      <Body image={nasaData}/>
      <Footer name='Page created by: Humza Malik' />
    </div>
  );
}

export default App;

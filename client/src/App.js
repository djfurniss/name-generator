import React, { useState, useEffect } from 'react'

const App = () => {

  const [name, setName] = useState([])

  // useEffect(() => {
  //   fetch('https://intense-island-24747.herokuapp.com/generate')
  //   .then((res) => res.json())
  //   .then((nme) => setName([nme]))
  // }, [])
  
  const clickHandler = (event) => {
    fetch('https://intense-island-24747.herokuapp.com/generate')
    .then((res) => res.json())
    .then((nme) => setName([nme]))
  };

  return (
    <div>
      <h1>Random Name Generator App</h1>
      <button
        onClick={clickHandler}>Click to choose a random name</button>
      <h3>{name}</h3>
    </div>
  )
};

export default App

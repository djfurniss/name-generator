import React, { useState, useEffect } from 'react'

const App = () => {
  const [name, setName] = useState([])

  useEffect(() => {
    fetch('https://intense-island-24747.herokuapp.com/')
      .then((res) => res.json())
      .then((nme) => setName([nme.message]))
  }, [])

  return (
    <h1>{name}</h1>
  )
};

export default App

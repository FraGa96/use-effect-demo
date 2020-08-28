import React, { useState, useEffect } from 'react'
import Block from './Block'
import './App.css'

const App = () => {
  const [show, setShow] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('App did mount')
  }, [])

  console.log('Render App')
  return (
    <div className="App">
      <div>Example with useEffect</div>
      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'} component</button>
      <button onClick={() => setCount(count + 1)}>Add click</button>
      {
        show ?
          <Block count={count} />
          : null
      }
    </div>
  );
}

export default App

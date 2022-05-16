---
tag:
  - Quiz
  - React

---
  
# React re-render 4

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

function A({ children }) {
  console.log('A')
  const [state, setState] = useState(0)
  useEffect(() => {
    setState(state => state + 1)
  }, [])
  return children
}

function B() {
  console.log('B')
  return <C/>
}

function C() {
  console.log('C')
  return null
}

function D() {
  console.log('D')
  return null
}

function App() {
  console.log('App')
  return (
    <div>
      <A><B/></A>
      <D/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
```
    
## Answer
```js
"App"
"A"
"B"
"C"
"D"
"A";
```


##  Source
[Source From](https://bigfrontend.dev/react-quiz/React-re-render-4)

  
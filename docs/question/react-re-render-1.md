---
tag:
  - Quiz
  - React

---
  
# React re-render 1

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
import React, { useState, useEffect} from 'react'
import ReactDOM from 'react-dom'

function A() {
  console.log('A')
  return <B/>
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
  const [state, setState] = useState(0)
  useEffect(() => {
    setState(state => state + 1)
  }, [])
  console.log('App')
  return (
    <div>
      <A state={state}/>
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
"App"
"A"
"B"
"C"
"D";
```


##  Source
[Source From](https://bigfrontend.dev/react-quiz/React-re-render-1)

  
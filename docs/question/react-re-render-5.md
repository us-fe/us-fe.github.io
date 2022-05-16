---
tag:
  - Quiz
  - React

---
  
# React re-render 5 - context

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
import React, { useState, memo, createContext, useEffect, useContext} from 'react'
import ReactDOM from 'react-dom'

const MyContext = createContext(0);

function B() {
  const count = useContext(MyContext)
  console.log('B')
  return null
}

const A = memo(() => {
  console.log('A')
  return <B/>
})

function C() {
  console.log('C')
  return null
}
function App() {
  const [state, setState] = useState(0)
  useEffect(() => {
    setState(state => state + 1)
  }, [])
  console.log('App')
  return <MyContext.Provider value={state}>
    <A/>
    <C/>
  </MyContext.Provider>
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
"App"
"B"
"C";
```


##  Source
[Source From](https://bigfrontend.dev/react-quiz/React-re-render-5)

  
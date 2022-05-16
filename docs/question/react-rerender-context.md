---
tag:
  - Quiz
  - React

---
  
# React re-render 6 - Context

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
import React, { useState, createContext, useEffect, useContext} from 'react'
import ReactDOM from 'react-dom'

const MyContext = createContext(0);

function B({children}) {
  const count = useContext(MyContext)
  console.log('B')
  return children
}

const A = ({children}) => {
  const [state, setState] = useState(0)
  console.log('A')
  useEffect(() => {
    setState(state => state + 1)
  }, [])
  return <MyContext.Provider value={state}>
    {children}
  </MyContext.Provider>
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
  return <A><B><C/></B><D/></A>
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
"A"
"B";
```


##  Source
[Source From](https://bigfrontend.dev/react-quiz/react-rerender-6-context)

  
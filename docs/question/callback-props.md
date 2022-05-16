---
tag:
  - Quiz
  - React

---
  
# callback props

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
import React, { memo, useState} from 'react'
import ReactDOM from 'react-dom'
import { screen, fireEvent } from '@testing-library/dom'

function _A({ onClick }) {
  console.log('A')
  return <button onClick={onClick} data-testid="button">click me</button>
}

const A = memo(_A)

function App() {
  console.log('App')
  const [state, setState] = useState(0)
  return <div>
    {state}
    <A onClick={() => {setState(state => state + 1)}}/>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// click the button
;(async function() {
  const button = await screen.findByTestId('button')
  fireEvent.click(button)
})()
```
    
## Answer
```js
"App"
"A"
"App"
"A";
```


##  Source
[Source From](https://bigfrontend.dev/react-quiz/callback-props)

  
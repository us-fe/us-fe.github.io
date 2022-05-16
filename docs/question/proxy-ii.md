---
tag:
  - Quiz
  - JavaScript

---
  
# Proxy II

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
class Dev {
  #name
  constructor(name) {
    this.#name = name
  }
  get name() {
    return this.#name;
  }
}

const dev = new Dev('BFE')
console.log(dev.name)

const proxyDev = new Proxy(dev, {})
console.log(proxyDev.name)
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/Proxy-II)

  
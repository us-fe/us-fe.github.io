---
tag:
  - Quiz
  - JavaScript

---
  
# inherit getter setter

## Question
What does the code snippet to the right output by `console.log`?

## Snippet
```js
let val = 0

class A {
  set foo(_val) {
    val = _val
  }
  get foo() {
    return val
  }
}

class B extends A { }

class C extends A {
  get foo() {
    return val
  }
}

const b = new B()
console.log(b.foo)
b.foo = 1
console.log(b.foo)

const c = new C()
console.log(c.foo)
c.foo = 2
console.log(c.foo)
console.log(b.foo)
```
    


##  Source
[Source From](https://bigfrontend.dev/quiz/inherit-getter-setter)

  
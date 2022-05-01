---
tag:
  - Coding
  - JavaScript
  - easy

---
  
# implement btoa()

[btoa()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa) accepts a binary string and returns a Base64-encoded ASCII string from it. Characters in a binary string are the ASCII character for each byte of the binary data.

Please read [Base64 wiki](https://en.wikipedia.org/wiki/Base64) and implement your own `btoa()`.

```js
myBtoa('BFE')
// 'QkZF'

myBtoa('BFE.dev')
// 'QkZFLmRldg=='
```

**note**

1.  Please don't use `window.btoa()` in your code.
2.  The binary string passed to your function are all valid ASCII characters, there will be another problem on the general Base64 encoding/decoding.


[Source From](https://bigfrontend.dev/problem/implement-btoa)

  
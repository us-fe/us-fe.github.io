---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# extract all anchor element from HTML string 

Given a HTML string, write a function to extract the anchor `<a/>` tag from it.

```js
extract(`
<div>
    <a>link1< / a><a href="https://bfe.dev">link1< / a>
    <div<abbr>bfe</abbr>div>
    <div>
<abbr>bfe</abbr><a href="https://bfe.dev" class="link2"> <abbr>bfe</abbr>   <span class="l">l</span><span  class="i">i</span>   nk2   </a>
    </div>
</div>
`)

// [
//    '<a>link1< / a>',
//    '<a href="https://bfe.dev">link1< / a>',
//    '<a href="https://bfe.dev" class="link2"> <abbr>bfe</abbr>   <span class="l">l</span><span  //class="i">i</span>   nk2   </a>'
 //]
```


[Source From](https://bigfrontend.dev/problem/extract-all-anchor-elements-from-HTML-string )

  
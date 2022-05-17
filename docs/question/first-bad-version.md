---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - Medium

---
  
# first bad version

## Question
Say you have multiple versions of a program, write a program that will find and return the first bad revision given a `isBad(version)` function.

Versions after first bad version are supposed to be all bad versions.

_notes_

1.  Inputs are all non-negative integers
2.  if none found, return -1

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/*
 type IsBad = (version: number) => boolean
 */

/**
 * @param {IsBad} isBad 
 */
function firstBadVersion(isBad) {
	// firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  return (version) => {
    // write your code to return the first bad version
    // if none found, return -1
  }
}
```
:::
    ::: code-group-item typescript
```typescript
type IsBad = (version: number) => boolean

function firstBadVersion(isBad: IsBad) {
	// firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  return (version: number): number => {
    // write your code to return the first bad version
    // if none found, return -1
  }
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/first-bad-version)

  
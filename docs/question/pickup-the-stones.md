---
tag:
  - Coding
  - JavaScript
  - Easy

---
  
# Pick up stones

## Question
There is a pile of `n` (n > 0) stones.

Player A and Player B take turns to pick 1 or 2 stones from the pile. A starts first.

Who picks the last stone loses the game.

Now here is the question, **is there a winning strategy for A or B ?** If so, returns the player name. If there is none, return null.

```ts
winningStonePicking(1)
// 'B'

winningStonePicking(2)
// 'A'

winningStonePicking(3)
// 'A'

winningStonePicking(4)
// 'B'
```

## Code
:::: code-group
::: code-group-item javascript
```javascript
/** 
 * @param {number} n
 * @return {'A' | 'B' | null}
 */
function canWinStonePicking(n) {
  // your code here
}
```
:::
    ::: code-group-item typescript:active
```typescript
function canWinStonePicking(n: number): 'A' | 'B' | null {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/pickup-the-stones)

  
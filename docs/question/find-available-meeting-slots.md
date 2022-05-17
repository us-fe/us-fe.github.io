---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - Airbnb
  - Medium

---
  
# find available meeting slots

## Question
`[start, end]` is a time interval, with all integers from 0 to 24.

Given schedules for all team members,

```js
[
  [[13,15], [11,12], [10,13]], //schedule for member 1
  [[8, 9]], // schedule for member 2
  [[13, 18]] // schedule for member 3
]
```

You need to create a function `findMeetingSlots()` to return the time slots available for all the members to have a meeting.

For the input above, below slots should be returned

```js
[[0,8],[9,10],[18,24]]
```

_Notes_

1.  the input schedule intervals might be unsorted
2.  one member's schedule might have overlapping intervals.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
// type Interval = [number, number]

/**
 * @param {Interval[][]} schedules
 * @return {Interval[]}
 */
function findMeetingSlots(schedules) {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/find-available-meeting-slots)

  
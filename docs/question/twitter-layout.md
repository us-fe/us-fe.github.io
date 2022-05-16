---
tag:
  - Coding
  - CSS
  - Layout

---
  
# Twitter's website layout

## Question
Open Twitter's website and change the window size, you'll notice that layout changes responsively.

Let's do something similar in this problem, suppose we have HTML structure as below.

```html
<div class="container">
  <div class="left">left</div>
  <div class="middle">middle</div>
  <div class="right">right</div>
</div>
```

Now please complete the CSS to satisfy following requirement

1.  when viewport width is not enough, set left column to 40px wide and middle column to stretching.
2.  middle column has maximum width of 240px
3.  when there is enough space, show right column which has width of 120px
4.  if there is more space, set left column to 80px
5.  when right column is visible, set minimum 10px space horizontally to the viewport border

It is a bit hard to explain clearly, but following screenshots might be easier to understand.




##  Source
[Source From](https://bigfrontend.dev/css/twitter-layout)

  
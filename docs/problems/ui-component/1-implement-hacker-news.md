# 1. Implement Hacker News

题目来源：小伙伴的面经

## 题目
Hacker news is a social news website focusing on computer science and entrepreneurship (per [Wikipedia](https://en.wikipedia.org/wiki/Hacker_News))

You can see the UI of Hacker News at: [https://news.ycombinator.com/](https://news.ycombinator.com/)

Now, you are asked to write a component that displays the top 100 news. Look and feel shows in the below mockup

![Hacker News Mockup](/problems/ui-component/1-implement-hacker-news/hacker-news.png)

You will need to use Hacker News API to fetch data and render in your UI component. Here's the API documentation: [HackerNews/API](https://github.com/HackerNews/API)

2 APIs need to pay attention to:
1. API to get top 500 stories: [Top Stories API](https://github.com/HackerNews/API#new-top-and-best-stories)
2. API to get specific item: [Items API](https://github.com/HackerNews/API#items)

You can use any framework or vanilla HTML/CSS/JS

### Follow up
Can you add UI pagination?
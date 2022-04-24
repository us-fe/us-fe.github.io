import { HopeThemeNavbarConfig } from "vuepress-theme-hope";

const navbar: HopeThemeNavbarConfig = [
  {
    text: "首页",
    link: "/",
  },
  {
    text: "基础面试题",
    children: [
      {
        text: "Coding",
        link: "/problems/coding/1-implement-curry",
        // children: [
        //     '/problems/coding/1-implement-curry.md',
        //     '/problems/coding/2-implement-curry-with-placeholder.md'
        // ]
      },
      {
        text: "JavaScript",
        link: "/problems/javascript/1-promise-order",
        // children: [
        //     '/problems/javascript/1-promise-order.md',
        // ]
      },
      {
        text: "React",
        link: "/problems/react/1-the-react-counter",
        // children: [
        //     '/problems/react/1-the-react-counter.md',
        // ]
      },
      {
        text: "UI Component",
        link: "/problems/ui-component/1-implement-hacker-news.md",
      },
    ],
  },
  {
    text: "系统设计",
    link: "/system-design/1-design-facebook-com",
  },
  {
    text: "博客",
    link: "/blog/how-to-contribute",
  },
  {
    text: "Markdown 增强语法",
    link: "https://vuepress-theme-hope.github.io/v2/md-enhance/zh/guide/",
  }
];
export default navbar;

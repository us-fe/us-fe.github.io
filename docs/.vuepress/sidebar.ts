import { HopeThemeSidebarConfig } from "vuepress-theme-hope";

const sidebar: HopeThemeSidebarConfig = {
  "/problems/": [
    {
      text: "Coding",
      children: [
        "/problems/coding/1-implement-curry.md",
        "/problems/coding/2-implement-curry-with-placeholder.md",
      ],
    },
    {
      text: "JavaScript",
      children: ["/problems/javascript/1-promise-order.md"],
    },
    {
      text: "React",
      children: ["/problems/react/1-the-react-counter.md"],
    },
    {
      text: "UI Component",
      children: ["/problems/ui-component/1-implement-hacker-news.md"],
    },
  ],
  "/system-design/": [
    {
      text: "1. Design facebook.com",
      link: "/system-design/1-design-facebook-com",
    },
  ],
  "/blog/": [
    {
      text: "关于 US-FE",
      link: "/blog/about-us-fe",
    },
    {
      text: "如何参与建设",
      link: "/blog/how-to-contribute",
    },
  ],
};

export default sidebar;

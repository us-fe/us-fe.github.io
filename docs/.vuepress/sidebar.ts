import { HopeThemeSidebarConfig } from "vuepress-theme-hope";
import css from "./sidebar/css.json";
import design from "./sidebar/design.json";
import problem from "./sidebar/problem.json";
import question from "./sidebar/question.json";
import quiz from "./sidebar/quiz.json";
import reactQuiz from "./sidebar/react-quiz.json";
import react from "./sidebar/react.json";
import ui from "./sidebar/ui.json";
// import ts from "./sidebar/typescript.json";

const sidebar: HopeThemeSidebarConfig = {
  "/question/": [
    problem,
    quiz,
    react,
    reactQuiz,
    question,
    css,
    design,
    ui,
    // ts
  ],
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
      children: [
        "/system-design/1-design-facebook-com",
        "/system-design/2-design-todo-app.md"
      ],
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

import { HopeThemeNavbarConfig } from "vuepress-theme-hope";

import css from "./sidebar/css.json";
import design from "./sidebar/design.json";
import problem from "./sidebar/problem.json";
import question from "./sidebar/question.json";
import quiz from "./sidebar/quiz.json";
import reactQuiz from "./sidebar/react-quiz.json";
import react from "./sidebar/react.json";
import ui from "./sidebar/ui.json";

const navbar: HopeThemeNavbarConfig = [
  {
    text: "首页",
    link: "/",
  },
  {
    text: "面试题目",
    children: [
      {
        text: problem.text,
        link: problem.children[0],
      },
      {
        text: quiz.text,
        link: quiz.children[0],
      },
      {
        text: react.text,
        link: react.children[0],
      },
      {
        text: reactQuiz.text,
        link: reactQuiz.children[0],
      },
      {
        text: question.text,
        link: question.children[0],
      },
      {
        text: css.text,
        link: css.children[0],
      },
      {
        text: design.text,
        link: design.children[0],
      },
      {
        text: ui.text,
        link: ui.children[0],
      },
    ],
  },

  {
    text: "电子书",
    children: [
      {
        text: "You Don't Know JS",
        link: "https://us-fe.github.io/ebooks/zh/you-dont-know-js-v1/up-going/ch1.html",
      },
    ],
  },

  {
    text: "博客",
    link: "/blog/how-to-contribute",
  },
];
export default navbar;

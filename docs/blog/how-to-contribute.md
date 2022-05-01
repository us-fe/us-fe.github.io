# 如何参与贡献

每个人都可以参与到 US-FE 的建设中来

### 参与到题目讨论

参与到题目讨论是最简单的，你只需要打开任何题目，比如 [/question/implement-curry.html](/question/implement-curry.html)，通过 GITHUB 授权，就可以参与讨论了！

所有的评论全部托管到 [Discusstions](https://github.com/us-fe/us-fe.github.io/discussions) ，全部是公开数据！

### 参与到题目设计

对于题目的设计者，你需要通过 fork Github 仓库 [us-fe.github.io](https://github.com/us-fe/us-fe.github.io)

你只需要按照序号添加文章，对于面试题目，可以添加 题目来源，题目说明，题目解析，示范答案等内容

具体方法是在 `docs/question/` 目录下添加一个文件

```
---
tag:
  - xx
---

## 这是一个新的题目

```

然后在 `docs/.vuepress/sidebar/` 下面找到合适的分类，增加收录

注意：本网站支持丰富的 Markdown 语法，具体可以参考 [https://vuepress-theme-hope.github.io/v2/md-enhance/zh/guide/](https://vuepress-theme-hope.github.io/v2/md-enhance/zh/guide/)

### 参与到网站建设

如果你希望参与到网站建设中，你仍然需要 fork Github 仓库 [us-fe.github.io](https://github.com/us-fe/us-fe.github.io)

本网站通过 [Vuepress@2.x](https://v2.vuepress.vuejs.org/zh/) 建设，采用了 [Vuepress-theme-hope](https://vuepress-theme-hope.github.io/v2/zh/) 主题

请确保仔细阅读相关文档！

所有的修改都会经过项目成员 review

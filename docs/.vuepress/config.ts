import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
// import { copyCodePlugin } from "vuepress-plugin-copy-code2";
// import { copyrightPlugin } from "vuepress-plugin-copyright2";
// import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
// import { blogPlugin } from "vuepress-plugin-blog2";
import navbar from "./navbar";
import sidebar from "./sidebar";
import { commentPlugin } from "vuepress-plugin-comment2";
// import { blogTheme } from "./theme";

export default defineUserConfig({
  // 站点配置
  lang: "zh-CN",
  title: "US-FE",
  description: "北美前端面试攻略",

  // we are using a custom theme adding this plugin
  // theme: path.resolve(__dirname, "./theme"),

  // site-level locales config
  // locales: {
  //     '/': {
  //         lang: 'zh-CN',
  //         title: '北美前端攻略',
  //         description: '北美最大的前端面试攻略',
  //     },
  //     '/en/': {
  //         lang: 'en-US',
  //         title: 'US-FE',
  //         description: 'US FE',
  //     },
  // },

  theme: hopeTheme({
    logo: "https://vuejs.org/images/logo.png",
    sidebar,
    navbar,
    // 默认为 GitHub. 同时也可以是一个完整的 URL
    repo: "us-fe/us-fe.github.io",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
    // repoLabel: "GitHub",
    // 是否在导航栏内显示仓库链接，默认为 `true`
    repoDisplay: true,
    docsDir: "/docs/",
    blog: {
      name: "US-FE",
      description: `US-FE 是 @xiaoyu2er 创建的北美最大的前端组织。
<br/>
通过网站 US-FE.github.io 来帮助北美的前端朋友解决前端面试的各个环节，帮助大家提升前端技术，拿到心仪 Offer！
<br>
关注公众号 前端小鱼二，回复 前端群 获得加群方式。
<br>
北美前端交流群聚集了北美各大公司的优秀前端，技术氛围浓厚，对于本网站发布的题目都会第一时间进行讨论，赶快加入吧！`,
      medias: {
        // QQ: "http://wpa.qq.com/msgrd?v=3&uin=1178522294&site=qq&menu=yes",
        // Qzone: "https://1178522294.qzone.qq.com/",
        Gmail: "mailto:694537055@qq.com",
        GitHub: "https://github.com/xiaoyu2er/",
        Linkedin: "https://www.linkedin.com/in/yanqi-zong-b9244496/",
        Wechat: "https://mp.weixin.qq.com/s/FDHddjT4k2wZLPys2IeD9Q",
        // Zhihu: "https://www.zhihu.com/people/mister-hope",
        // Steam: "https://steamcommunity.com/id/Mr-Hope/",
        // Weibo: "https://weibo.com/misterhope",
      },
    },

    plugins: {
      copyCode: {},
      copyright: {},
      mdEnhance: {
        enableAll: true,
      },
      comment: {
        comment: true,
        type: "giscus",
        repo: "us-fe/us-fe.github.io",
        repoId: "R_kgDOHN4p-g",
        category: "Announcements",
        categoryId: "DIC_kwDOHN4p-s4COuxq",
        mapping: "pathname",
        reactionsEnabled: true,
        inputPosition: "top",
        // clientId: '43a736117e3390b1549c',
        // clientSecret: 'a5a4990ad34fd6eea84e9592da69b364d099e9de',
      },
      blog: {
        category: "/category/",
      },
    },
  }),

  plugins: [
    // commentPlugin({
    //   comment: true,
    //   type: "giscus",
    //   repo: "us-fe/us-fe.github.io",
    //   repoId: "R_kgDOHN4p-g",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOHN4p-s4COuxq",
    //   mapping: "pathname",
    //   reactionsEnabled: true,
    //   inputPosition: "top",
    //   // clientId: '43a736117e3390b1549c',
    //   // clientSecret: 'a5a4990ad34fd6eea84e9592da69b364d099e9de',
    // }),
    // copyCodePlugin({
    //   // 插件选项
    // }),
    // copyrightPlugin({
    //   // 插件选项
    // }),
    // mdEnhancePlugin({
    //   enableAll: true,
    // }),
  ],
});

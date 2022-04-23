// import { defineUserConfig } from 'vuepress'
// import type { DefaultThemeOptions } from 'vuepress'
// import { comment, GiscusOptions } from "vuepress-plugin-comment2";
import { defineHopeConfig } from "vuepress-theme-hope";
import { path } from "@vuepress/utils";
import { copyCode } from "vuepress-plugin-copy-code2";
import { copyright } from "vuepress-plugin-copyright2";
import { mdEnhance } from "vuepress-plugin-md-enhance";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineHopeConfig({
  // 站点配置
  lang: "zh-CN",
  title: "US-FE",
  description: "北美前端面试攻略",

  // we are using a custom theme adding this plugin
  theme: path.resolve(__dirname, "./theme"),

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

  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    sidebar,
    navbar,
  },

  plugins: [
    copyCode({
      // 插件选项
    }),
    copyright({
      // 插件选项
    }),
    mdEnhance({
      enableAll: true,
    }),
  ],
});

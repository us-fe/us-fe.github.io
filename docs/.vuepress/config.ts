// import { defineUserConfig } from 'vuepress'
// import type { DefaultThemeOptions } from 'vuepress'
// import { comment, GiscusOptions } from "vuepress-plugin-comment2";
import { defineHopeConfig } from "vuepress-theme-hope";
import { path } from "@vuepress/utils";



export default defineHopeConfig({
    // 站点配置
    lang: 'zh-CN',
    title: 'US-FE',
    description: '北美前端面试攻略',

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
        logo: 'https://vuejs.org/images/logo.png',
        sidebar: {
            '/problems/': [{
                text: 'Coding',
                children: [
                    '/problems/coding/1-implement-curry.md',
                    '/problems/coding/2-implement-curry-with-placeholder.md'
                ]
            },
            {
                text: 'JavaScript',
                children: [
                    '/problems/javascript/1-promise-order.md',
                ]
            },
            {
                text: 'React',
                children: [
                    '/problems/react/1-the-react-counter.md',
                ]
            }, {
                text: 'UI Component',
                children: [
                    '/problems/ui-component/1-implement-hacker-news.md'
                ]
            }],
            '/system-design/': [
                {
                    text: '1. Design facebook.com',
                    link: '/system-design/1-design-facebook-com'
                }
            ],
            '/blog/': [
                {
                    text: '关于 US-FE',
                    link: '/blog/about-us-fe'
                },
                {
                    text: '如何参与建设',
                    link: '/blog/how-to-contribute'
                }
            ]

        },
        navbar: [
            {
                text: '首页', link: '/',
            },
            {
                text: '基础面试题',
                children: [
                    {
                        text: 'Coding',
                        link: '/problems/coding/1-implement-curry'
                        // children: [
                        //     '/problems/coding/1-implement-curry.md',
                        //     '/problems/coding/2-implement-curry-with-placeholder.md'
                        // ]
                    },
                    {
                        text: 'JavaScript',
                        link: '/problems/javascript/1-promise-order',
                        // children: [
                        //     '/problems/javascript/1-promise-order.md',
                        // ]
                    },
                    {
                        text: 'React',
                        link: '/problems/react/1-the-react-counter',
                        // children: [
                        //     '/problems/react/1-the-react-counter.md',
                        // ]
                    },
                    {
                        text: 'UI Component',
                        link: '/problems/ui-component/1-implement-hacker-news.md'
                    }
                ]
            },
            {
                text: '系统设计', link: '/system-design/1-design-facebook-com',
            },
            {
                text: '博客', link: '/blog/about-us-fe',
            },
            {
                text: 'GITHUB',
                link: 'https://github.com/us-fe'
            }
        ],
    },

})
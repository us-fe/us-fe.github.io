import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    lang: 'zh-CN',
    title: 'US-FE',
    description: '北美前端面试攻略',

    // 主题和它的配置
    theme: '@vuepress/theme-default',

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
            }],
            '/system-design/': [
                {
                    text: '1. Design facebook.com',
                    link: '/system-design/1-design-facebook-com'    
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
                    }
                ]
            },
            {
                text: '系统设计', link: '/system-design/1-design-facebook-com',
            },
            {
                text: 'GITHUB',
                link: 'https://github.com/us-fe'
            }
        ],
        // vssueConfig: {
        //     platform: 'github',
        //     owner: 'us-fe',
        //     repo: 'us-fe.github.io',
        //     clientId: '43a736117e3390b1549c',
        //     clientSecret: 'a5a4990ad34fd6eea84e9592da69b364d099e9de',
        // }

    },

    // plugins: [
    //     ['@vuepress-reco/vuepress-plugin-comments']
    // ]
})
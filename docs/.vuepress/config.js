module.exports = {
    title: 'L-3177',
    description: '  ',
    head: [
        // ['link', { rel: 'icon', href: '/img/logo.ico' }],
    ],
    themeConfig: {
        //导航栏
        nav: [
            { text: '主页', link: '/' },
            { text: 'Github', link: 'https://www.github.com/L-3177' },
        ],
        sidebar: [['/','首页'],['/ios/','ios'],['/web/','web'],['/android/','android']],
    },
    cache: true,
    base:"/vuepressBlog/",
}
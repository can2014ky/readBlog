const navConf = require('./navConf.js');

module.exports = {
    type: 'blog',
    startYear: '2020',
    author: 'can2014ky',
    logo: '/avatar.jpg',
    authorAvatar: '/avatar.jpg',
    record: '京ICP备20200610号-6',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: '最近更新',
    keyPage: {
        keys: ['e10adc3949ba59abbe56e057f20f883e'],
        color: '#42b983',
        lineColor: '#42b983'
    },
    nav: navConf,
    sidebar: {
        '/docs/theme-reco/': [ '', 'theme', 'plugin', 'api' ],
    },
    blogConfig: {
        category: { location: 4, text: '分类' },
        tag: { location: 5, text: '标签' },
    },
    friendLink: [
        {
            title: '新浪微博',
            desc: 'can2014ky',
            // avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
            link: 'https://weibo.com/u/3704641645?is_all=1'
        },
    ],
}
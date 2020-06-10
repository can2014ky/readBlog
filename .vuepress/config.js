module.exports = {
  title: "以书会友",
  description: '姜太公钓鱼，愿者上钩！',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/avatar.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    logo: '/avatar.jpg',
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '读书池', link: '/timeline/', icon: 'reco-other' },
      { text: '读书笔记', link: '/timeline/', icon: 'reco-suggestion' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      // { text: '文档', 
      //   icon: 'reco-message',
      //   items: [
      //     { text: 'vuepress-reco', link: '/docs/theme-reco/' }
      //   ]
      // },
      { text: '关于', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/recoluan', icon: 'reco-github' }
        ]
      }
    ],
    sidebar: {
      '/docs/theme-reco/': [
        '',
        'theme',
        'plugin',
        'api'
      ]
    },  
    // 博客设置
    blogConfig: {
      category: {
        location: 4, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 5, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    friendLink: [
      // {
      //   title: '午后南杂',
      //   desc: 'Enjoy when you can, and endure when you must.',
      //   email: '1156743527@qq.com',
      //   link: 'https://www.recoluan.com'
      // },
      {
        title: '新浪微博',
        desc: 'can2014ky',
        // avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://weibo.com/u/3704641645?is_all=1'
      },
    ],
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    author: 'can2014ky',
    authorAvatar: '/avatar.jpg',
    // 备案号
    record: '京ICP备20200610号-6',
    // 项目开始时间
    startYear: '2020',
    /**
     * 密钥 (if your blog is private)
     */

    keyPage: {
      keys: ['e10adc3949ba59abbe56e057f20f883e'],
      color: '#42b983',
      lineColor: '#42b983'
    },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  }
}  

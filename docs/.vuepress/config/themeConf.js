const navConf = require('./navConf.js');

module.exports = {
  type: 'blog',
  startYear: '2020',
  author: 'can2014ky',
  logo: '/images/avatar.jpg',
  authorAvatar: '/images/avatar.jpg',
  record: '京ICP备20200610号-6',
  search: true,
  searchMaxSuggestions: 10,
  lastUpdated: '最近更新',
  // keyPage: {
  //     keys: ['e10adc3949ba59abbe56e057f20f883e'],
  //     color: '#42b983',
  //     lineColor: '#42b983'
  // },
  nav: navConf,
  blogConfig: {
    category: {
      location: 4,
      text: '分类'
    },
    tag: {
      location: 5,
      text: '标签'
    },
  },
  locales: {
    '/': {
      recoLocales: {
        homeBlog: {
          article: '美文', // 默认 文章
          tag: '标识', // 默认 标签
          category: '类别', // 默认 分类
          friendLink: '友链' // 默认 友情链接
        },
        pagation: {
          prev: '上一页',
          next: '下一页',
          go: '前往',
          jump: '跳转至'
        }
      }
    }
  },
  friendLink: [{
    title: '新浪微博',
    desc: 'can2014ky',
    logo: "/images/sina.jpg",
    link: 'https://weibo.com/u/3704641645?is_all=1'
  }],
  pagination: {
    perPage: 5,
  },
  valineConfig: {
    appId: '3xI6figmWv5GVJUemrlqWcH5-gzGzoHsz',
    appKey: 'QhUw08Kq0BPAfBjp869ztSoS',
  },
  noFoundPageByTencent: false,
}
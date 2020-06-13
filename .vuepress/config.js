
const headConf = require('./config/headConf.js');
const pluginConf = require('./config/pluginConf.js');
const themeConf = require('./config/themeConf.js');

module.exports = {
  title: "读书么？",
  description: '姜太公钓鱼，愿者上钩！',
  dest: 'public',
  head: headConf,
  theme: 'reco',
  themeConfig: themeConf,
  markdown: {
    lineNumbers: true
  },
  plugins: pluginConf,
}
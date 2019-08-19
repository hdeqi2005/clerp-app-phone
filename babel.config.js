// babel.config.js //浏览器兼容性 https://cli.vuejs.org/zh/guide/browser-compatibility.html#browserslist
module.exports = {
  presets: [
    ['@vue/app', {
      polyfills: [
        'es6.promise',
        'es6.symbol'
      ]
    }]
  ]
}
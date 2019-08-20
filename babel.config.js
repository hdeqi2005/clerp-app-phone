

// babel.config.js //浏览器兼容性 https://cli.vuejs.org/zh/guide/browser-compatibility.html#browserslist
// Requires Babel "^7.0.0-0" "babel-core": "^6.26.3",
module.exports = {
  presets: [
    //@babel/preset-env此配置对测试 npm run test 很重要，不可以删除，否则报错！！！
    
    ['@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    ['@vue/app', {
      // polyfills: [
      //   'es6.promise',
      //   'es6.symbol'
      // ]
    }]
  ],
  plugins:[
    'add-module-exports',
    'syntax-dynamic-import',
    'transform-object-assign',
    'transform-object-rest-spread'
  ],
  comments: false,
  // env: {
  //   test: {
  //     presets: ["@babel/preset-env"],
  //     plugins: ["istanbul"]
  //   }
  // }
}


// 页面中element-ui的按需引入没有生效，这就奇怪了，后来找了很多问题，发现原来是配置无法合并的问题，导致.babelrc文件的配置根本就没有生效。于是把配置放到了同一个文件就好了，

// 记得删除另外一份文件（babel.config.js）只保留一个配置文件(.babelrc)

//.babelrc 配置 大于  babel.config.js 配置 必要时，删除 babel.config.js 合并到.babelrc
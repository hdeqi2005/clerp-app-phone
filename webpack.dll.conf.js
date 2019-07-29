// /*
// * @desc 静态公共资源打包配置
// */

// 'use strict'

// const path     = require('path')
// const webpack  = require('webpack')

// const src      = path.resolve(process.cwd(), 'src'); // 源码目录
// const evn      = process.env.NODE_ENV === "production" ? "production" : "development";

// module.exports = {
//     mode: evn,
//     resolve: {
//         alias: {
//             // 活动工作流常用组件路径map
//             utils: path.resolve(src, 'js', 'utils'),
//             vendors: path.resolve(src, 'js', 'vendor')
//         },
//         extensions: ['.js']
//     },

//     entry: {
//         // 定义程序中打包公共文件的入口文件vendor.js
//         vendor: ['vendors', 'vue'],
//     },

//     output: {
//         path: path.join(src, '../', 'dll'),
//         filename: '[name].dll.js',
//         library: '[name]_[hash]',
//         libraryTarget: 'this'
//     },

//     plugins: [
//         new webpack.DllPlugin({
//             // 定义程序中打包公共文件的入口文件vendor.js
//             context: process.cwd(),

//             // manifest.json文件的输出位置
//             path: path.join(process.cwd(), 'dll', '[name]-manifest.json'),

//             // 定义打包的公共vendor文件对外暴露的函数名
//             name: '[name]_[hash]'
//         })
//     ]
// }

const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const src      = path.resolve(process.cwd(), 'src'); // 源码目录
const evn      = process.env.NODE_ENV === "production" ? "production" : "development";

// dll文件存放的目录
const dllPath = 'public/vendor'

module.exports = {
  mode: evn,
  resolve: {
      alias: {
          // 活动工作流常用组件路径map
          util: path.resolve(src, 'libs', 'util'),
          tools: path.resolve(src, 'libs', 'tools')
      },
      extensions: ['.js']
  },
  entry: {
    // 需要提取的库文件 // 定义程序中打包公共文件的入口文件vendor.js
    vendor: ['echarts','vue', 'vue-router', 'vuex', 'axios', 'fastclick','js-cookie','js-md5','localStorage','nprogress','core-js']
  },
  output: {
    path: path.join(__dirname, dllPath),
    filename: '[name].dll.js',
    // vendor.dll.js中暴露出的全局变量名
    // 保持与 webpack.DllPlugin 中名称一致
    library: '[name]_[hash]'
  },
  plugins: [
    // 清除之前的dll文件
    new CleanWebpackPlugin(['*.*'], {
      root: path.join(__dirname, dllPath)
    }),
    // 设置环境变量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production'
      }
    }),
    // manifest.json 描述动态链接库包含了哪些内容
    new webpack.DllPlugin({
      path: path.join(__dirname, dllPath, '[name]-manifest.json'),
      // 保持与 output.library 中名称一致
      name: '[name]_[hash]',
      context: process.cwd()
    })
  ]
}
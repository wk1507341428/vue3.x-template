const fs = require('fs')
const path = require('path')

const sassSource = fs.readFileSync('src/assets/styles/theme.scss','utf-8')

module.exports = {
    pages: {
        activity02: {
            // 应用入口配置，相当于单页面应用的main.js，必需项
            entry: 'src/modules/activity02/main.js',

            // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
            template: 'public/activity02/index.html',

            // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
            filename: 'activity02/index.html',

            // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
            // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'activity02 page',

            chunks: ['chunk-vendors', 'chunk-common', 'activity02']
        },
        activity01: {
            entry: 'src/modules/activity01/main.js',
            template: 'public/activity01/index.html',
            filename: 'activity01/index.html',
            title: 'activity01 page',
            chunks: ['chunk-vendors', 'chunk-common', 'activity01']          
        },
        index: {
            entry: 'src/modules/index/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: '首页',
            chunks: ['chunk-vendors', 'chunk-common', 'index']          
        },
    },
    productionSourceMap: false,
    css:{
        loaderOptions: {
            sass: {
                data: sassSource
            }
        }
    }
}
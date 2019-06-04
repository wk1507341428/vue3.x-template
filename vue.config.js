module.exports = {
    pages: {
        activity02: {
            // 应用入口配置，相当于单页面应用的main.js，必需项
            entry: 'src/modules/activity02/main.js',

            // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
            template: 'public/activity02/activity02.html',

            // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
            filename: 'activity02.html',

            // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
            // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'activity02 page',
        },
        // 只有entry属性时，直接用字符串表示模块入口
        activity01: {
            // 应用入口配置，相当于单页面应用的main.js，必需项
            entry: 'src/modules/activity01/main.js',

            // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
            template: 'public/activity01/activity01.html',

            // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
            filename: 'activity01.html',

            // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
            // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'activity01 page',            
        }
    }
}
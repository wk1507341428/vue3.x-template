# 项目说明

该项目是一个纯前端项目，修改于vue3.x

---

## 环境变量

目前该项目集成了三个默认的模式，分别是`development`,`test`和`production`, 

```
yarn serve          // development开发环境
yarn test-serve     // test开发环境
yarn pro-serve      // production开发环境

yarn dev-build      // 打包  development环境
yarn test-build     // 打包  test环境
yarn build          // 打包生产环境

```

如果想要对应的模式下新增环境变量只需要修改根目录的`.env.[modal]`文件即可

详情可见 ➡️ [官方文档](https://cli.vuejs.org/zh/guide/mode-and-env.html)

备注：webpack4中有一个新的参数 `mode` ,如果`mode`是`production`,webpack4默认打包的时候会压缩代码，而其他环境下是不会的。

---

## 关于多页面

虽然`vue`是一个单页面应用，但是有的时候根据业务需求会运用到多页面，这个时候则需要开发者单独配置下

幸运的是`vue-cli3.x`对多页面配置非常友善，只需要在`vue.config.js`中，增加一个配置项`page`，相应的添加配置

```
    |-public   // html 页面入口
    |-src
    | |-modules  // vue页面入口
```

详情可见 ➡️ [官方文档](https://cli.vuejs.org/zh/config/#pages)
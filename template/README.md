# 项目名称:{{ name }}

> 项目描述{{ description }}

默认项目层级结构

``` bash
src
├─assets //图片
├─components  //公用组件
├─css  //样式  支持适配移动端项目
├─http //网络请求封装,接口管理
├─router //路由
├─store //vuex
├─utils //第三方以及工具类
└─views  //页面
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
{{#unit}}

# run unit tests
npm run unit
{{/unit}}
{{#e2e}}

# run e2e tests
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
npm test
{{/if_or}}
```
:warning: **使用npm run e2e进行自动化测试时，需要chrome版本在71和75之间，[历史版本](https://www.applex.net/downloads/google-chrome-for-mac.25/history)**

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 自定义vue-cli模板

在使用vue-cli的过程中，常用的webpack模板只为我们提供最基础的内容，但每次需要新建一个项目的时候就需要把之前项目的一些配置都搬过来，这样就造成挺大的不方便，如果是作为一个团队，那么维护一个通用的模板，我认为是挺有必要的。

## 常用构建项目的目录
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

## 使用说明

1、不使用vue_template模板，可以直接使用vue-cli脚手架进行生成项目
``` bash
$ npm install -g vue-cli
$ vue init webpack my-project
$ cd my-project
$ npm install
$ npm run dev
```
2、使用vue_template自定义模板，可直接在终端运行此指令

1>默认模板分支：master
``` bash
$ vue init peterDuang/vue_template my-project
```

2>指定模板分支

``` bash
$ vue init vue init peterDuang/vue_template my-project
```
develop表示指定的分支版本
说明：[使用git gitlab下载模板规则](https://www.npmjs.com/package/download-git-repo)

## 项目搭建指令说明
- `Project name` 项目名称(默认同my-prihect)
- `Project description` 项目描述(默认 A Vue.js project)
- `Author` 作者（默认全局git账户）
- $ `Install vue-router? (Y/n)` 询问是否安装vue-roter到项目
- $ `Install vuex? (Y/n)` 询问是否安装vuex(store)到项目
- $ `is Mobile project? (Y/n)` 询问是否生成移动端项目
- $ `Use ESLint to lint your code? (Y/n)` 询问是否安装ESLint到项目
- $ `Set up unit tests (Y/n)` 询问是否安装单元测试到项目
- $ `Setup e2e tests with Nightwatch? (Y/n)` 询问是否安装e2e测试到项目
- $ `Should we run `npm install` for you after the project has been created? (recommended) (`
- `Use arrow keys)`
- `❯ Yes, use NPM` 
-  `Yes, use Yarn`
-  `No, I will handle that myself`

:warning: **推荐使用 ‘NPM’,以上‘$’标注项，表示按需安装即可**
:warning: **使用npm run e2e进行自动化测试时，需要chrome版本在71和75之间，[历史版本](https://www.applex.net/downloads/google-chrome-for-mac.25/history)**
:warning: **The develop branch is not considered stable and can contain bugs or not build at all, so use at your own risk.**

The development server will run on port 8080 by default. If that port is already in use on your machine, the next free port will be used.

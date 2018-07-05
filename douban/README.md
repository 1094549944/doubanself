# douban

> A Vue.js project

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


# 使用有赞商城的ui vant
 npm i vant -S

# 使用babel-plugin-import  用于优雅的引入vant
npm i babel-plugin-import -D

## 解决移动端 300ms 延时的问题，使用 fastclick 这个库
npm install fastclick --save

## 使用 stylus
npm install stylus --save
npm install stylus-loader --save
或者写成：npm install stylus stylus-loader --save

## 使用 iconfont 字体

## 解决部分机型打开白屏的问题，一个原因是，无法识别promise,另一个原因是webpack-dev-server 的问题。解决：打包，然后到测试或者正式服务器上
npm install babel-polyfill --save



## 安装normalize 抹平浏览器的差异化
npm install normalize.css --save


## 安装vuex 来存储数据

npm install vuex --save

## 安装axios，来请求数据

npm install axios --save


## 解决无法跨域使用jsonp 
npm i jsonp --save-dev

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

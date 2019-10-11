# ES6-lottery
es6彩票项目

## 涉及到的知识点

1. 打包工具gulp
2. 编译工具babel
3. 服务器框架express

## 构建中遇到的问题

1. gulp3升级到gulp4
[gulp 不再支持同步任务](https://www.gulpjs.com.cn/docs/getting-started/async-completion/)

报错信息："Did you forget to signal async completion?"
```
说明你并未使用前面提到的返回方式。你需要使用 callback 或返回 stream、promise、event emitter、child process、observable 来解决此问题
```

2. babel6升级至babel7

[使用指南](https://www.babeljs.cn/docs/usage)

```
包名的改变 @babel/preset-env babel7形如@babel/xxxx
配置文件的改变
```


# 工作流程


## 项目构建

### 安装 [Node.js](https://nodejs.org/en) (6.x+)

安装后会集成 npm 包管理工具，设置使用交行的npm仓库。

```sh
$ npm config set registry http://182.119.137.98:7001/
```

### 安装脚手架

```sh
$ npm install -g create-bocomui-demo
```

### 生成项目

```sh
$ create-bocomui-demo my-app
```

## 开发

```sh
$ cd my-app

$ npm start
```

到此为止，前端环境配置完成，可以通过`http://127.0.0.1:9000`进行测试。

## 部署测试/上线

### 代码规范检查

```sh
$ npm run lint
```

### 构建线上环境代码

```sh
$ npm run build
```

完成后，myapp 下的 static 目录及 index.html 发送给后台即可，如 Java web 项目下的 webapp 目录

### 修改服务器配置

脚手架采用 browser history 控制 URL，服务器也需要做相应的访问路径配置。

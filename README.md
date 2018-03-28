# Bocom UI

交行 React 组件库

## 安装模块`npm install`

Node.js模块的安装分为全局模式和本地模式。本地模式安装的模块可以在代码中使用“import”调用，但是全局模式安装不可以。全局本安装主要是为了在命令行中使用，例如全局安装了vmarket后，就可以在命令行中直接运行vm命令。
> 安装之前修改npm下载仓库为交行仓库: npm config set registry http://182.119.137.98:7001/

### 本地安装
```sh
npm install @bocom/bocomui
```
一般情况下会以本地模式运行，包会被安装到和你的应用程序代码的本地node_modules目录下。
> 注意：安装的同时，将信息写入到应用程序代码的package.json中可以使用：npm install bocom-ui --save。

### 全局安装
```sh
npm install -g @bocom/bocomui
```
在全局模式下，Node.js包默认被安装到用户目录的"AppData\Roaming\npm\node_modules"下，例如"C:\Users\Administrator\AppData\Roaming\npm\node_modules"。

### 安装express进行测试
```sh
npm install express –gf
```
在命令行中运行，在目录中检测express是否安装成功。

## 使用

Bocom UI 抛弃传统的资源加载方式，基于 webpack 打包，资源种类多种多样，会涉及一些 webpack 的配置，如下：

```js
{
  module: {
    loaders: [{
      test: /\\.(eot|woff|woff2|ttf|svg|png|jpg)(\\?v=[\\d\\.]+)?$/,
      loader: 'file?name=files/[hash].[ext]'
    }, {
      test: /\\.css$/,
      loader: 'style!css'
    }]
  },
  resolve: {
    alias: {
      bocom: 'bocom-ui/lib'
    }
  }
}
```
webpack 配置完成后，即可在代码中使用组件，以 [Button](/components/Button)  为例：
```js
import Button from 'bocomui/Button'

const ButtonType = () => {
  return (
    <div>
      <Button>默认</Button>
    </div>
  )
}
```
详细查看[Button](/components/Button)


## 组件全局配置

覆盖或扩展 `defaultProps` 即可，以 [DatePicker](/components/DatePicker) 为例：
```js
DatePicker.defaultProps = Object.assign(DatePicker.defaultProps || {}, {
  placeholder: 'Please select date'
})
```
命令式 API 模块 [message](/components/message)、[confirm](/components/confirm)、[xhr](/components/xhr) 也支持全局配置，涉及 url 方式加载数据的组件以及 [Form](/components/Form) 均依赖 xhr。详细配置请参考其各自文档

> 全局配置后，这些 API 会变成有状态的，即最终结果受配置影响，所以尽量一次性配置并向其它开发者说明

## 开发者说明

### 开发环境安装

```sh
git clone git@182.119.137.98:/data/git/bocomui-doc.git

cd bocomui-doc

npm install

npm start
```
查看: [Home](/ "首页")




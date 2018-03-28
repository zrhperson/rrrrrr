import React from 'react'
import { Link } from 'react-router'
import Button from 'bocomui/Button'
import { Row, Col } from 'bocomui/Layout'
import Center from 'public/Center'
import Pre from 'public/Pre'
import Feature from './Feature'
import './index.less'

export default () => {


  return (
    <div className="home">
      <div className="home__banner">
        <Center>
          <div className="home__banner-center">
            <h2>Bocom UI框架 React 组件库</h2>
            <h1>Bocom UI</h1>
            <em>版本：v1.0</em>
            <Link to="/guide#install" className="home__banner-install">
              <Button>安装</Button>
            </Link>
            <Link to="/guide" className="home__banner-start">
              <Button>开始</Button>
            </Link>
          </div>
        </Center>
      </div>

      <div className="home__middle">
        <Center>
          <Row gutter>
            <Col col="md-12" className="home__middle-left">
              <h2>交行Bocom UI框架方案</h2>
              <p>Bocom UI 结合可快速开发集单页面应用、组件化、可视化、大数据交互、权限管理、前后端分离等特性的项目。</p>
            </Col>
          </Row>
        </Center>
      </div>

      <div className="home__features">
        <Center>
          <div className="home__features-head">
            <h1>Bocom UI组件化开发</h1>
            <p>Bocom UI 抛弃了传统的组件封装方式，基于 React 组件开发思想，语义化 UI 的同时可作为一种数据类型自由传递。</p>
          </div>
          <Row>
            <Feature title="组件化" icon={require('./img/feature_01.png')}>
              基于 React 组件开发思想，简单、灵活、高效
            </Feature>
            <Feature title="覆盖广" icon={require('./img/feature_02.png')}>
              覆盖基础组件，高级交互，以及计划推出的数据可视化组件
            </Feature>
            <Feature title="生态完整" icon={require('./img/feature_03.png')}>
              搭配脚手架，摆脱繁琐的环境配置、重复的基础工作
            </Feature>
            <Feature title="交行GUIP项目" icon={require('./img/feature_04.png')}>
              ····
            </Feature>
          </Row>
        </Center>
      </div>

      {/*<div className="home__bottom">
        <Center>
          <h1>交行GUIP项目组Bocom UI框架</h1>
        </Center>
      </div>*/}
    </div>
  )
}

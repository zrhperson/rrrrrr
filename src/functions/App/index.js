import 'normalize.css'
import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import classnames from 'classnames'
import { Row, Col } from 'bocomui/Layout'
import { Nav, NavItem } from 'bocomui/Nav'
import { Dropdown, DropdownToggle, DropdownMenu } from 'bocomui/Dropdown'
import Button from 'bocomui/Button'
import Icon from 'bocomui/Icon'
import './index.less'

class App extends Component {

  renderNav() {
    return (
      <ul>
        <li>
          <IndexLink to="/" activeClassName="active">首页</IndexLink>
        </li>
        <li>
          <Link to="/design" activeClassName="active">设计说明</Link>
        </li>
        <li>
          <Link to="/guide" activeClassName="active">指南</Link>
        </li>
        <li>
          <Link to="/components" activeClassName="active">组件</Link>
        </li>
        <li>
          <Link to="/changelog" activeClassName="active">更新日志</Link>
        </li>
        <li>
          <Link to="/scaffolding" activeClassName="active">脚手架</Link>
        </li>
      </ul>
    )
  }

  render() {
    const { children } = this.props
    return (
      <div className="wrapper">
        <Row className="header" fluid>
          <Col>
            <Link to="/" className="header__logo">
              <span className="logo">
              </span>
              Bocom UI <sub>v1.0</sub>
            </Link>
          </Col>
          <Col className="header__nav">
            {this.renderNav()}
          </Col>
          <Col right>
            <Dropdown ref="dropdown">
              <DropdownToggle className="header__nav-toggle">
                <Button icon="bars" transparent />
              </DropdownToggle>
              <DropdownMenu
                onClick={() => this.refs.dropdown.close()}
                className="header__nav-toggle-popover"
                align="middle"
              >
                {this.renderNav()}
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
        <div className="body">{children}</div>
        <div className="footer">交行GUIP项目组Bocom UI框架</div>
      </div>
    )
  }
}

export default App

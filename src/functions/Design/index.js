import React, { Component } from 'react'
import { Nav, IndexNavItem, NavItem } from 'bocomui/Nav'
import { Layout, LayoutSidebar, LayoutContent } from 'public/Layout'
import designs from './designs.json'

export default class extends Component {

  constructor() {
    super()
    this.state = {
      open: false
    }
  }

  toggle(open) {
    this.setState({ open })
  }

  render() {
    const { open } = this.state
    const { children, params } = this.props
    return (
      <Layout open={open} onToggle={open => this.toggle(open)}>
        <LayoutSidebar>
          <Nav href="/design" onItemClick={() => this.toggle(false)}>
            {designs.map((item, i)=>(
              <NavItem
                key={item.title}
                icon={item.icon}
                title={item.title}
                href={item.name}
                defaultOpen
              >
                {item.components.map((component) => {
                  return (
                    <NavItem
                      key={component.name}
                      href={`${item.name}/${component.name}`}
                      title={component.title}
                    />
                  )
                })}
              </NavItem>
            ))}
          </Nav>
        </LayoutSidebar>
        <LayoutContent>
          {children}
        </LayoutContent>
      </Layout>
    )
  }
}

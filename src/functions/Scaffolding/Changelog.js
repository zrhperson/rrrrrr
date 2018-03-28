import React from 'react'
import Changelog from 'public/Changelog'
import html from './markdown/CHANGELOG.md'

export default () => {
  return <Changelog html={html} />
}

/**
 * Created by conivision on 2017/3/20.
 */
import React from 'react'
import Markdown from 'public/Markdown'
import html from './stay.md'

export default () => {
  return <Markdown html={html} />
}
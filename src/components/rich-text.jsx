import React from 'react'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Paragraph from './paragraph'

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <span style={{ fontFamily: 'TimelessBold' }}></span>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
  },
}

const RichText = ({ field }) => renderRichText(field, options)

export default RichText

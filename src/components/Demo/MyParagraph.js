

import React from 'react'

function MyParagraph(props) {
    console.log('paragraph running')
  return (
    <p>{props.children}</p>
  )
}

export default MyParagraph;
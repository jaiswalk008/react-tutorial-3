import React from 'react'
import MyParagraph from './MyParagraph'
function DemoOutput(props) {
    console.log('demo output running');
  return (
    <MyParagraph>{props.show? 'This is new' : ''}</MyParagraph>
  )
}
//memo tells a react that it should look for props and compare the new values and old values
//The consequences of memo is that we tradeoff function reexecution with props comparision
export default React.memo(DemoOutput);
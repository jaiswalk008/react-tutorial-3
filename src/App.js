import React from 'react';
import Button from './components/UI/Button/Button'
import DemoOutput from './components/Demo/DemoOutput';
import { useState , useCallback} from 'react';
import './App.css';

function App() {
  const [showParagraph , setShowParagraph] = useState(false);
  const [allowToggle , setAllowToggle] = useState(false);
  console.log('APP RUNNING')
  
  //usecallback creates  an object ofthe function which doesnot changes and we do this since
  //we now that the function is not going to change.
  /*The empty dependency array ([]) indicates that the function does not depend 
  on any variables from the component's scope. This means the function is created 
  once and memoized, and it won't change across renders unless its dependencies change.
  if we don't pass allowToggle in the array then the function will be created with allowToggle
  being false and it will not know if the value has changed.   */
  const allowToggleHandler = () => setAllowToggle(true);
  const toggleParagraphHandler = useCallback(() =>{
    if(allowToggle){
      setShowParagraph((prevState) => !prevState);

    }
  },[allowToggle])
  
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      {/* false is also created but it is a primitive value so false===false evaluates to true
      but with functions it will be an object which is reference type */}
      {/* nothing changes on the button but everytime the app component is reexecuted a new function is created*/}
      <Button onClick={allowToggleHandler}>Allow toggle</Button>
      <Button onClick ={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;

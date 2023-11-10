import React from 'react';
import Button from './components/UI/Button/Button'
import DemoList from './components/Demo/DemoList';
import { useState , useCallback , useMemo} from 'react';
import './App.css';

function App() {
  const [listTitle , setListTitle] = useState('My list')
  const changeTitleHandler = useCallback(() =>{
    setListTitle('New Title');
  },[]);
  const [order , setOrder]= useState(true);
  //takes a callback and returns a object by doing the memoization
  const changeOrderHandler =() => setOrder(!order);
  const listItems = useMemo(() => [5,3,1,10,9],[]);
  return (
    <div className="app">
      <DemoList title={listTitle} order={order} items={listItems} />
      <Button onClick={changeTitleHandler} >Change List Title</Button>
      <Button onClick={changeOrderHandler}>Change to {order? "Ascending" : "Descending"} order</Button>
    </div>
  );
}

export default App;

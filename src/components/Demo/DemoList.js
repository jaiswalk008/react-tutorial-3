import React, {useMemo , useState} from 'react'
 
function DemoList({items ,title, order}) {
  // const [listItems , setListItems] = useState(items);
  const sortedInAscendingOrder = useMemo(() =>{
    console.log('Ascending  sorted list')
    return [...items].sort((a,b) => a-b);
  },[items]);

  const sortedInDescendingOrder = useMemo(() =>{
    console.log('Descending  sorted list')
    return [...items].sort((a, b) => b-a);
  },[items]);
  // setListItems(sortedList)
  console.log('demolist running')
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {order
          ? sortedInAscendingOrder.map((item) => (
              <li key={item}>{item}</li>
            ))
          : sortedInDescendingOrder.map((item) => (
              <li key={item}>{item}</li>
            ))}
      </ul>
    </div>
  );
}

export default React.memo(DemoList);
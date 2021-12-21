import React,{useState} from 'react';
import Table from './Table';
import ChildComp from './ChildComp';
import {useDispatch, useSelector} from 'react-redux';
import ClassComp from './ClassComp';

function App() {

  const state = useSelector(state=>state.count);
  const [count,setCount] = useState(state);
  console.log(state)
  const handleChange = (newCount) =>{
    setCount(newCount)
  }

  return (
    <div >
     <Table />   
     <ChildComp changeCount = {(val)=>handleChange(val)} count = {count} />    
     <ClassComp />
    </div>
  );
}

export default App;

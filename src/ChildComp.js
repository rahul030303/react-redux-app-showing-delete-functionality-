import React from 'react';
import {useDispatch, useSelector} from 'react-redux';


const ChildComp = (props) =>{

    const dispatch = useDispatch();

    const handleChange = () =>{
        const newVal =  props.count + 1 
        props.changeCount(newVal);
        dispatch({
            type:'INCREMENT',
            payload:newVal
        })
    }

    return(
        <div>
            <h1>Hello, the count value is {props.count}</h1>
            <button onClick = {handleChange}>change Count</button>
        </div>
    )
}

export default ChildComp;

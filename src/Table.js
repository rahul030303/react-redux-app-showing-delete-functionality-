import React,{useState,useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';

const Table = (props) =>{

    const dispatch = useDispatch();
    const state = useSelector(state => state.students);
    
      const  [students, setStudents] =  useState(false)

      useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
        setStudents(response.data.slice(0,10))
        dispatch({
            type:'ADD',
            payload:response.data.slice(0,10)
        })
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      
      },[])

      useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
        setStudents(state)
       
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })

        console.log("new", state)
      },[state])

   const renderHeaderData=()=>{
        const header = Object.keys(students[0]);
       
        return(
            header.map((key,index)=>{
                return (
                    <th key={index}>
                        {key.toUpperCase()}
                    </th>
                )
            })
        )
    }

   const handleDelete = (student)=>{
    console.log("in delete",student);
    dispatch({
        type:'DELETE',
        payload:student
    })
    }

   const renderTableData = ()=>{
      
        return(
       students.map((student,index)=>{
            const {userId,id,title,completed} = student;
            // console.log(id)
            return(<tr key={id}>
                    <td>{userId}</td>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{completed.toString()}</td>
                    <button onClick = {()=>handleDelete(student)}>delete</button>
                </tr> 
                
            )
        }))
    }

    if(!students.length){
return <h1>No Data Found</h1>
    }

  
        return(
            <table id='students'>
            <thead>
            <tr>{renderHeaderData()}</tr>
        </thead>
        <tbody>
       {renderTableData()}
        </tbody>  
            </table>
        )
    }


export default Table;


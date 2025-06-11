import React from "react";
import { useState, useEffect } from 'react';
import Todo from './Todo';
import { FaPlus } from "react-icons/fa";
import {db} from './firebase'
import {query,collection,onSnapshot, updateDoc,doc, addDoc, deleteDoc} from 'firebase/firestore'

function App(){
  const [todos,setTodos] =useState([])
  const [input,setInput]=useState("")
  //console.log(input)

  //create todo
  const createTodo=async(e)=>{
    e.preventDefault(e)
    if(input===''){
      alert('Please enter a valid task')
      return //stops code and doesnt enter an empty task into db
    }
    await addDoc(collection(db,'todos'),{      //will create db or update existing db
      text:input,
      completed:false
    })
    setInput('')
  }

  //read todo from firebase
  useEffect(()=>{
    const q=query(collection(db,'todos'))
    const unsubscribe=onSnapshot(q,(querySnapshot)=>{
      let todosArr=[]
      querySnapshot.forEach((doc)=>{
        todosArr.push({...doc.data(),id:doc.id})
      });
      setTodos(todosArr)
    })
    return ()=> unsubscribe()
  },[])

  //update todo in firebase
  const toggleComplete=async(todo)=>{
    await updateDoc(doc(db,'todos',todo.id),{
      completed: !todo.completed
    })
  }

  //delete todo
  const deleteTodo=async(id)=>{
    await deleteDoc(doc(db,'todos',id))
  }

  
  return (
    <div className="h-screen w-screen m-0  bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]">
      <h1 className='text-center text-5xl py-6'>ToDo List</h1>
      <div className="bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4 pb-0">
        <form onSubmit={createTodo} className='flex justify-between'>
          <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='   Add Task' className='p-2 my-12 w-full bg-white py-5'/>
          <button className='p-2 px-5 my-12 mx-2 bg-purple-500 text-white border cursor-pointer'><FaPlus /></button>
        </form>
        <ul>
          {todos.map((todo,index)=>(
            <Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
          ))}
        </ul>
        {todos.length <1 ? null: <p className='text-center p-2'>{`You have ${todos.length} todos`}</p>}
      </div>
    </div>
  );
}

export default App;
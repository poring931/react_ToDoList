import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri';

const RemoveAllTodoItems = ({setTodos}) => {

    const removeTodos = () =>{
          setTodos( prev=> [])
        
    }

    return (
        <button onClick={removeTodos} className="relative flex justify-center items-center mb-3 border-2 border-zinc-800 py-3 rounded-2xl w-1/5 mx-auto p-5 mt-20 bg-red-400 hover:bg-slate-700">
            <RiDeleteBin5Line/>
        </button>
    )
}

export default RemoveAllTodoItems

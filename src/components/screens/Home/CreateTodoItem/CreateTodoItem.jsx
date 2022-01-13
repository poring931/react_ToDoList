import React, { useState } from 'react'
import AddButtonTodoItem from './AddButtonTodoItem'

const CreateTodoItem = ({setTodos}) => {
    

    const [title,setTitle] = useState('')

    const addTodoItem = (title) => {
        setTodos( prev=> [...prev,{
            _id: new Date(),
            title,
            isCompleted: false
        }])
        setTitle('')
    }

    return (
        <div className="relative flex justify-between items-center mb-3 border-2 border-zinc-800 py-3 rounded-2xl w-2/5 mx-auto p-5 mt-20" >
            
            <button className="bg-pink-500 absolute -left-8 hover:bg-slate-600" onClick={() => addTodoItem(title)}><AddButtonTodoItem /></button>
            <input 
                type="text" 
                onChange={e=>setTitle(e.target.value)} 
                value={title} 
                className="bg-transparent w-full border-none outline-none"
                placeholder="Enter you todo task"
            />
        </div>
    )
}

export default CreateTodoItem

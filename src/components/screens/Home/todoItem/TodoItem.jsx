
import React from 'react';
import Check from './Check';
import Remove from './Remove';

const TodoItem = ({todo, changeTodoItem, removeTodoItem}) => {
    return (
        <div  className="flex justify-between items-center mb-3 rounded-2xl bg-gray-700 w-2/5 mx-auto p-5" >
            <button className="flex items-center" onClick={()=> changeTodoItem(todo._id)}>
                <Check size={24} className="text-gray-900" isCompleted={todo.isCompleted} />
                <span className={`transition-all ease-in-out duration-300
                                ${todo.isCompleted ? 'line-through' : ''} `}>
                {todo.title}
                </span>
            </button>
             
            <button onClick={()=> removeTodoItem(todo._id)} ><Remove /></button>
        </div>
    );
};

export default TodoItem;
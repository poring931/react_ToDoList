import React, { useState } from 'react';
import CreateTodoItem from './CreateTodoItem/CreateTodoItem';
import RemoveAllTodoItems from './RemoveAllTodoItems/RemoveAllTodoItems';
import TodoItem from './todoItem/TodoItem';

const data = [
    {   
        _id:'wewes323',
        title: 'Finish the essay collaboration',
        isCompleted: false,
    },
    {
        _id:'wewes32323',
        title: 'Read next chapter of the book',
        isCompleted: false,
    },
    {
        _id:'wewesdsds32323',
        title: 'Send the finish assigment',
        isCompleted: false,
    },
]
const Home = () => {

    const[todos, setTodos] = useState(data)

    const changeTodoItem = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id) 
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }



    const removeTodoItem = (id) => {
       
        setTodos([...todos].filter(t=> t._id !== id))
    }

    return (
        <div className='text-white w-4/5 mx-auto'>
            <h1 className='text-2xl  font-bold text-center mb-4 '>TodoList</h1>
            {
                todos.map((todo) => (
                    <TodoItem key={todo._id} todo={todo} changeTodoItem={changeTodoItem} removeTodoItem={removeTodoItem}/>
                ))
            }
            <CreateTodoItem setTodos={setTodos}/>
            <RemoveAllTodoItems setTodos={setTodos}/>
        </div>
    );
}

export default Home;


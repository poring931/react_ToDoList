import { Context } from '../../..';
import React, { useContext, useState } from 'react';
import CreateTodoItem from './CreateTodoItem/CreateTodoItem';
import RemoveAllTodoItems from './RemoveAllTodoItems/RemoveAllTodoItems';
import TodoItem from './todoItem/TodoItem';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/compat/app';

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


     const {auth, firestore} = useContext(Context)
    const [value, setValue] = useState('')

   
    const [test, loading] = useCollectionData(
        firestore.collection('todolist').orderBy('createAt') //тут получаем данные. пока х3 как засунуть их
    )
    console.log(test)
    console.log(loading)
    const[todos, setTodos] = useState(data)

    const changeTodoItem = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id) 
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const testSend = async () =>{
        console.log(firestore)
        firestore.collection('todolist').add({
            _id: new Date(),
            Title: 'zxczxcxzcxzc',
            createAt: firebase.firestore.FieldValue.serverTimestamp()
        })
    }

    const removeTodoItem = (id) => {
       
        setTodos([...todos].filter(t=> t._id !== id))
    }

    return (
        <div className='text-white w-4/5 mx-auto'>
            <div onClick={testSend}> Добавить тест</div>
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


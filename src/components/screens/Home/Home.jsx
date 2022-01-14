import { Context } from '../../..';
import React, { useContext, useEffect, useState } from 'react';
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


     const { auth,firestore} = useContext(Context)


      const [list, loading] = useCollectionData(
        firestore.collection('todolist') //тут получаем данные. пока х3 как засунуть их
    )
    const [todos, setTodos] = useState(list)


    const changeTodoItem = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id) 
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const testSend = async () =>{
        firestore.collection('todolist').add({
            _id: new Date().getMilliseconds() / 0.33,
            isCompleted: false,
            title: 'sssadasdsadss',
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
            {console.log(list)}
           
            {
             list ? (
                 list.map((todo) => (
                            <TodoItem key={todo._id} todo={todo} changeTodoItem={changeTodoItem} removeTodoItem={removeTodoItem}/>
                        ))
                    ) 
                    :
                    (<div></div>)
                     
            }

            <CreateTodoItem setTodos={setTodos}/>
            <RemoveAllTodoItems setTodos={setTodos}/>
        </div>
    );
}

export default Home;


import './App.css';
import { useEffect, useState } from 'react'
import Footer from './components/Footer';
import Heander from './components/Header';
import Main from './components/Main';

function App() {
    const [todos, setTodos] = useState([]);
    const [IsLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/todos`)
            .then(res => res.json())
            .then(data => {
                setTodos(Object.values(data));
                setLoading(false);
            });
    }, []);

    const onTodoAdd = () => {
        const lastId = todos[todos.length - 1]._id;
        const id = `todo_0${Number(lastId[lastId.length - 1]) + 1}`;
        const text = prompt('Add new todo!');
        const newTodo = {
            _id: id,
            text: text,
            isCompleted: false
        };

        setTodos(state => [...state, newTodo]);
    }


    const onStatusChange = (id) => {
        setTodos(state => state.map(t => t._id === id ? ({ ...t, isCompleted: !t.isCompleted }) : t));
    }

    const onTodoDelete = (id) => {
        setTodos(state => state.filter(t => t._id !== id));
    }

    return (

        <div>
            <Heander />

            <Main
                todos={todos}
                IsLoading={IsLoading}
                onStatusChange={onStatusChange}
                onTodoAdd={onTodoAdd}
                onTodoDelete={onTodoDelete} />

            <Footer />
        </div>
    );
}

export default App;

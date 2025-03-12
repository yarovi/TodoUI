import React, { useState , useEffect} from 'react'
import { getAllTodos } from '../service/TodoService'
import { useNavigate } from 'react-router'

const ListTodoComponent = () => {

    // const dummy = [{
    //     "id": 1,
    //     "title": 'Learn React',
    //     "description": 'More Info about Learn React',
    //     "completed": false,
    // },
    // {
    //     "id": 2,
    //     "title": 'Learn React',
    //     "description": 'More Info about Learn React',
    //     "completed": false,
    // },
    // {
    //     "id": 3,
    //     "title": 'Learn React',
    //     "description": 'More Info about Learn React',
    //     "completed": false,
    // },
    // {
    //     "id": 4,
    //     "title": 'Learn React-2',
    //     "description": 'More Info about Learn React 2',
    //     "completed": false,
    // },
    // {
    //     "id": 5,
    //     "title": 'Learn React-3',
    //     "description": 'More Info about Learn React 3',
    //     "completed": false,
    // }
    // ]
    const navigate = useNavigate()

    const [todos, setTodos] = useState([])

    useEffect(() => {
        listTodos()
    }, [])

    function listTodos() {
        getAllTodos().then(response => {
            console.log(response.data)
            setTodos(response.data)

        }).catch(error => {
            console.log(error)
        })

    }

    function addNewTodo() {
        console.log('Add New Todo')
        navigate('/add-todo')
    }
    return (
        <div className='container'>

            <h1 className='text-center'>Todo List</h1>
            <button className='btn btn-primary mb-2' onClick={addNewTodo}>Add Todo</button>
            <div>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(todo => (
                                <tr key={todo.id}>
                                    <td>{todo.title}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.completed ? 'YEs':'NO'}</td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>



        </div>
    )
}

export default ListTodoComponent
import React, { useState , useEffect} from 'react'
import { deleteTodo, getAllTodos, completeTodo, unCompleteTodo } from '../service/TodoService'
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

    function updateTodo(id) {
        console.log('Update Todo')
        navigate(`/update-todo/${id}`)
    }

    function removeTodo (id) {
        console.log('Delete Todo')

        deleteTodo(id)
        .then(response => {
            console.log('Todo deleted successfully')
            listTodos()
        })
        .catch(error => {
            console.log('Error deleting todo')
        })  
    }   

    function markedCompletedTodo(id) {
        console.log('Completed Todo')
        completeTodo(id)
        .then(response => {
            console.log('Todo completed successfully')
            listTodos()
        })
        .catch(error => {
            console.log('Error completing todo')
        })
    }

    function markedUnCompletedTodo(id) {
        console.log('UnCompleted Todo')
        unCompleteTodo(id)
        .then(response => {
            console.log('Todo uncompleted successfully')
            listTodos()
        })
        .catch(error => {
            console.log('Error uncompleting todo')
        }
        )
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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(todo => (
                                <tr key={todo.id}>
                                    <td>{todo.title}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.completed ? 'YEs':'NO'}</td>
                                    <td>
                                        <button className='btn btn-info' onClick={()=>updateTodo(todo.id)}>Update</button>
                                        <button className='btn btn-danger' onClick={()=>removeTodo(todo.id)}  style={{marginLeft: "10px"}}>Delete</button>
                                        <button className='btn btn-success' onClick={()=>markedCompletedTodo(todo.id)} style={{marginLeft: "10px"}}>Completed</button>
                                        <button className='btn btn-info' onClick={()=>markedUnCompletedTodo(todo.id)} style={{marginLeft: "10px"}}>UnCompleted</button>
                                    </td>
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
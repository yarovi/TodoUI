import React, { useEffect } from 'react'
import { useState } from 'react'
import { createTodo, updateTodo,getTodoById } from '../service/TodoService'
import { useNavigate ,useParams} from 'react-router-dom'

const TodoComponent = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [completed, setCompleted] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        if(id){
            getTodoById(id)
            .then(response => {
                setTitle(response.data.title)
                setDescription(response.data.description)
                setCompleted(response.data.completed)
            })
            .catch(error => {
                console.log('Error fetching todo')
            })
        }
    }
    , [])


    function saveOrUpdateTodo(e) {
        e.preventDefault()
        const todo = {
            title: title,
            description: description,
            completed: completed
        }

        if (id) {
            updateTodo(todo, id)
            .then(response => {
                console.log('Todo updated successfully')
                navigate('/todos')
            })
            .catch(error => {
                console.log('Error updating todo')
            })
        }
        else {
            createTodo(todo)
            .then(response => {
                console.log('Todo created successfully')
                navigate('/todos')
            })
            .catch(error => {
                console.log('Error creating todo')
            })
        }

        

        console.log('Todo => ' + JSON.stringify(todo))


        

    }

    function pageTitle() {
        return id ? 'Update Todo' : 'Add Todo'
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {pageTitle()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label>Title</label>
                                <input type='text' className='form-control' value={title} 
                                onChange={e => setTitle(e.target.value)} />
                            </div>
                            <div className='form-group'>
                                <label>Description</label>
                                <input type='text' className='form-control' value={description} 
                                onChange={e => setDescription(e.target.value)} />
                            </div>
                            <div className='form-check'>
                                <input type='checkbox' 
                                className='form-check-input' checked={completed}
                                onChange={e => setCompleted(e.target.checked)} />
                                <label className='form-check-label' >Completed</label>

                            </div>
                            <button className='btn btn-success' 
                            onClick={saveOrUpdateTodo}>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoComponent
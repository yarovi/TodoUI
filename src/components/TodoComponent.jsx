import React from 'react'
import { useState } from 'react'
import { createTodo } from '../service/TodoService'
import { useNavigate } from 'react-router-dom'

const TodoComponent = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [completed, setCompleted] = useState(false)
    const navigate = useNavigate()

    function saveOrUpdateTodo(e) {
        e.preventDefault()
        console.log('Save Todo')

        const todo = {
            title: title,
            description: description,
            completed: completed
        }

        console.log('Todo => ' + JSON.stringify(todo))


        createTodo(todo)
            .then(response => {
                console.log('Todo created successfully')
                navigate('/todos')
            })
            .catch(error => {
                console.log('Error creating todo')
            })

    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Add Todo</h2>
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
                                className='form-check-input' value={completed}
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
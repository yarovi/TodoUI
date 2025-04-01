import React, {  useState } from 'react';
import { registerAPICall } from '../service/AuthService';
import { useNavigate } from 'react-router-dom';
const RegisterComponent = () => {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigator = useNavigate()


    function handlerRegistrationForm(e) {
        e.preventDefault()
        console.log('Name:', name)
        console.log('Username:', username)
        console.log('Email:', email)

        const register = {name, username, email, password}
        console.log(register)
        registerAPICall(register)
        .then(response => {
            console.log(response.data)
            navigator('/login')
        })
        .catch(error => {
            console.log(error)
        })


    }

    return (
        <div>
            <br />
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card'>
                        <div className='card-header'>
                            <h2>User Registration form</h2>
                        </div>

                        <div className='card-body'>
                            <form>
                                <div className='row mb-3'>
                                    <div className='form-group'>
                                        <label className='col-md-3 control-label'>Name:</label>
                                        <input type='text'
                                            className='form-control'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='form-group'>
                                        <label>Username:</label>
                                        <input type='text' className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='form-group'>
                                        <label>Email:</label>
                                        <input type='text' className='form-control'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='form-group'>
                                        <label>Password:</label>
                                        <input type='password'
                                            className='form-control'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <button className='btn btn-primary' 
                                    onClick={(e)=> handlerRegistrationForm(e)}>Register</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterComponent;
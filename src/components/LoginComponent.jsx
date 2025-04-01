import React , {useState}from 'react'
import { loginAPICall, saveLoggerInUser, storeToken } from '../service/AuthService'
import { useNavigate } from 'react-router-dom'

function LoginComponent() {

    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')

    const navigate = useNavigate()

    async function handlerLoginForm(e){
        e.preventDefault()
        console.log('Username:', username)

        const loginObj = {username, password}
        console.log(loginObj)

        await loginAPICall(username, password)
        .then(response=>{
            console.log(response.data)

            //Only basic 
            //const token ="Basic " + window.btoa(username + ":" + password)
            //Bearer token
            const token = 'Bearer ' + response.data.accessToken
            console.log(token)
            storeToken(token)
            saveLoggerInUser(username)
            navigate('/todos')
        })
        .catch(error=>{
            console.log(error)
        })
    }
  return (
    <div className='container'>
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
                                    <label className='col-md-3 control-label'>Username:</label>
                                    <input type='text'
                                        className='form-control'
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)} />
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <div className='form-group'>
                                    <label>Password:</label>
                                    <input type='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <button className='btn btn-primary' onClick={(e)=>handlerLoginForm(e)}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default LoginComponent
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { isUserLoggedIn } from '../service/AuthService'
import { logout } from '../service/AuthService'
const HeaderComponent = () => {

  const isAuth = isUserLoggedIn()
  const navigate = useNavigate()

  function handleLogout() {
    console.log('Logout')
    logout()
    navigate('/')

  }
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="https://javaguides.net" className="navbar-brand">
              Todo Management App</a></div>

          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                {
                  isAuth &&
                  <NavLink to="/todos" className="nav-link">Todos</NavLink>

                  //<NavLink to="/todos" className="nav-link">Todos</NavLink> : ''
                }
              </li>
            </ul>
          </div>
          <ul className='navbar-nav'>
            {
              !isAuth &&
              <li className='nav-item'>

                <NavLink to="/register" className="nav-link">Register</NavLink>

              </li>

            }

            {
              !isAuth &&
              <li className='nav-item'>

                <NavLink to="/login" className="nav-link">Login</NavLink>

              </li>

            }

            {
              isAuth &&
              <li className='nav-item'>

                <NavLink to="/logout" className="nav-link" onClick={handleLogout}>Logout</NavLink>

              </li>

            }


          </ul>
        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent
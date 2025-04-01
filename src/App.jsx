import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListTodoComponent from './components/ListTodoComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

import { BrowserRouter, Route } from 'react-router-dom'
import { Navigate, Routes } from 'react-router'
import TodoComponent from './components/TodoComponent'
import RegisterComponent from './components/RegisterComponent'
import LoginComponent from './components/LoginComponent'
import { isUserLoggedIn } from './service/AuthService'
function App() {

  function AuthenticateRoute({ children }) {
    const isAuth = isUserLoggedIn()
    if (isAuth) {
      return children
    }
    return <Navigate to="/" />
  }

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<LoginComponent />} ></Route>
          <Route path="/todos"

            element={
              <AuthenticateRoute>
                <ListTodoComponent />
              </AuthenticateRoute>

            } ></Route>
          <Route path="/add-todo"
            element={
              <AuthenticateRoute>
                <TodoComponent />
              </AuthenticateRoute>
            } > </Route>
          <Route path="/update-todo/:id"
            element={
              <AuthenticateRoute>
                <TodoComponent />
              </AuthenticateRoute>
            } > </Route>

          <Route path="/register" element={<RegisterComponent />} ></Route>

          <Route path='/login' element={<LoginComponent />}></Route>
        </Routes>

      </BrowserRouter>
      <FooterComponent />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListTodoComponent from './components/ListTodoComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

import { BrowserRouter ,Route} from 'react-router-dom'
import { Routes } from 'react-router'
import  TodoComponent from './components/TodoComponent'
function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<ListTodoComponent />} ></Route>
          <Route path="/todos" element={<ListTodoComponent />} ></Route>
          { <Route path="/add-todo" element={<TodoComponent />} ></Route> }
        </Routes>

      </BrowserRouter>
      {/* <ListTodoComponent /> */}
      <FooterComponent />
    </>
  )
}

export default App

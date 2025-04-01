import axios from 'axios';
import { getToken } from './AuthService';
const BASE_REST_API_URL="http://localhost:8080/api/v1/todos";

axios.interceptors.request.use(function (config){
    config.headers['Authorization'] = getToken()
    return config}, function (error) {
    return Promise.reject(error)
})

export const getAllTodos = () =>  axios.get(BASE_REST_API_URL)

export const createTodo = (todo) => axios.post(BASE_REST_API_URL, todo)

export const getTodoById = (todoId) => axios.get(BASE_REST_API_URL + '/' + todoId)

export const updateTodo = (todo, todoId) => axios.put(BASE_REST_API_URL + '/' + todoId, todo)

export const deleteTodo = (todoId) => axios.delete(BASE_REST_API_URL + '/' + todoId)

export const completeTodo = (todoId) => axios.patch(BASE_REST_API_URL + '/' + todoId + '/complete')

export const unCompleteTodo = (todoId) => axios.patch(BASE_REST_API_URL + '/' + todoId + '/uncomplete')



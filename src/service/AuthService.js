import axios from 'axios';

const BASE_REST_API_URL = "http://localhost:8080/api/auth";

export const registerAPICall = (user) => axios.post(BASE_REST_API_URL + '/register', user)

/*
export function loginAPICall(user) {
    return axios.post(BASE_REST_API_URL + '/login', user)
}*/

export const loginAPICall = (userNameOrEmail, password) =>
    axios.post(BASE_REST_API_URL + '/login', { userNameOrEmail, password })

export const storeToken = (token) => localStorage.setItem
    ('token', token)

export const getToken = () => localStorage.getItem('token')

export const saveLoggerInUser = (username) => {
    sessionStorage.setItem('authenticatedUser', username)
}

export const isUserLoggedIn = () => {
    let user = sessionStorage.getItem('authenticatedUser')
    if (user === null) return false
    return true
}

export const getLoggedInUser = () => {
    let user = sessionStorage.getItem('authenticatedUser')
    if (user === null) return ''
    return user
}

export const logout = () => {
    localStorage.clear()
    sessionStorage.clear()
    window.location.reload(false)
}
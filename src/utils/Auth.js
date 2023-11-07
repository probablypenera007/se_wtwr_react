import * as api from "./Api.js";

export const register = (name, avatar, email, password) => {
    return fetch(`${api.baseUrl}/signup`, {
        method: 'POST',
        headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name, avatar })
    })
    // .then(api.checkResponse)
    .then(api.checkResponse);
}

export const logIn = (email, password) => {
    return fetch(`${api.baseUrl}/signin`, {
        method: 'POST',
        headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( email, password)
    })
   .then(api.checkResponse)
   .then((data) => {
    if(data.token) {
        localStorage.setItem('jwt', data.token);
    }
    console.log("this is data login: ", data)
    return data
   })
}

export const checkToken = (token) => {
    return fetch(`${api.baseUrl}/user/me`, {
        method: 'GET',
        headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
    .then(api.checkResponse)
    // .then(res => res.json())
    // .then(data => data)
}
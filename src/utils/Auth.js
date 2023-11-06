import * as api from "./Api.js";

export const register = (name, avatar, email, password) => {
    return fetch(`${api.baseUrl}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, avatar, email, password })
    })
    // .then(api.checkResponse)
    .then(response => {
        console.log('Response: ', response);
        return api.checkResponse(response);
    })
    .then(data => {
        console.log('Data: ', data);
        return data;
    })
    .catch(error => {
        console.error("womp! womp! error register: ", error)
    })  
}

export const logIn = (email, password) => {
    return fetch(`${api.baseUrl}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    })
    // .then(api.checkResponse)
    .then(response => response.json())
    .then(data => {
        if (data.user) {
            localStorage.setItem('jwt', data.jwt);
            return data;
        }
        // console.log('Data: ', data);
        // return data;
    })
    .catch(error => {
        console.error("womp! womp! error register: ", error)
    })  
}

export const checkToken = (token) => {
    return fetch(`${api.baseUrl}/user/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
    .then(res => res.json())
    .then(data => data)
}
import * as api from "./Api.js";

export const register = (name, avatar, email, password) => {
  return fetch(`${api.baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  })
  .then(response => response.json())
  .then((data) => {
    if (data.token) {
      localStorage.setItem("jwt", data.token);
      return data.user; 
    }
    return Promise.reject(`Error: ${data.statusCode}`);
  })
  .catch(err => {
    console.error('Registration failed:', err);
    throw err; 
  });
};


export const logIn = (email, password) => {
  return fetch(`${api.baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
  .then(response => response.json())
  .then((data) => {
    if (data.token) {
      localStorage.setItem("jwt", data.token);
      return data.user;
    }
    return Promise.reject(`Error: ${data.statusCode}`);
  })
  .catch(err => {
    console.error('Login failed:', err);
    throw err; 
  });
};

export const checkToken = (token) => {
  return fetch(`${api.baseUrl}/user/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  })
  .then(response => response.json())
  .then(data => data)
  .catch(err => {
    console.error('Token check failed:', err);
    throw err; 
  });
};

import * as api from "./Api.js";



export const register = ({name, avatar, email, password}) => {
  return fetch(`${api.baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  })
  .then(response => api.checkResponse(response))
};


export const logIn = ({email, password}) => {
  return fetch(`${api.baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
  .then(response => api.checkResponse(response))
};

export const editProfile = ({name, avatar}) => {
  const jwt = localStorage.getItem("jwt");
  return fetch(`${api.baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${jwt}`,
    },
    body: JSON.stringify({ name, avatar }),
  })
  .then(response => api.checkResponse(response))
};

export const checkToken = () => {
  const jwt = localStorage.getItem("jwt");
  return fetch(`${api.baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${jwt}`,
    },
  })
  .then(response => api.checkResponse(response));
};

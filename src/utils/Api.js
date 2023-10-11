// import React from "react";

const baseUrl = 'http://localhost:3001';

function checkResponse(res) {
    if(res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Error: ${res.status}`)
    } 
}


// GET https://localhost:3001/items
export function getItems() {
    return fetch(`${baseUrl}/items`)
    .then(checkResponse);
}
// Export the contents of api.js to the App component. 
// Modify the corresponding Effect hook to add the items
//  to the application state from the server


// POST https://localhost:3001/items
// Pass name, imageUrl, and weather to the request body. 
// Modify the corresponding handler for adding a new item in App.js.


// DELETE https://localhost:3001/items/:id

//  OLD API SETUP FROM PREVIOUS PROJECT FOR REFERENCE ONLY
// export default class Api {
//     constructor({baseUrl, headers}) {
//       this._baseUrl = baseUrl;
//       this._headers = headers;
//     }
//   _checkResponse(res){
//     if (res.ok) {
//       return res.json();
//     }else{
//       return Promise.reject(`'Error:' ${res.status}`)
//     }
//   }
  
//     getUserInfo() {
//       return fetch(`${this._baseUrl}/users/me`, {
//         headers: this._headers,
//         }).then(this._checkResponse);
//       }
  
//    getInitialCards() {
//       return fetch(`${this._baseUrl}/cards`, {
//         headers: this._headers,
//         }).then(this._checkResponse);
//       }
  
//     createCard({ name, link }) {
//       return fetch(`${this._baseUrl}/cards`, {
//         method: "POST",
//         body: JSON.stringify({ name, link }),
//         headers: this._headers,
//       }).then(this._checkResponse);
//     }
  
  
//     updateEditProfile({ name, about }) {
//       return fetch(`${this._baseUrl}/users/me`, {
//         method: "PATCH",
//         body: JSON.stringify({ name, about }),
//         headers: this._headers,
//         }).then(this._checkResponse);
//       }
  
//     deleteCard(cardId) {
//       return fetch(`${this._baseUrl}/cards/${cardId}`, {
//         method: "DELETE",
//         headers: this._headers,
//         }).then(this._checkResponse);
//       }
  
//     likeCard(cardId) {
//       return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
//         method: "PUT",
//         headers: this._headers,
//         }).then(this._checkResponse);
//       }
  
//     unlikeCard(cardId) {
//       return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
//         method: "DELETE",
//         headers: this._headers,
//         }).then(this._checkResponse);
//       }
      
//     updateAvatar(updatedAvatar) {
//       return fetch(`${this._baseUrl}/users/me/avatar`, {
//         method: "PATCH",
//         body: JSON.stringify({ avatar: updatedAvatar }),
//         headers: this._headers,
//         }).then(this._checkResponse);
//       }
//   }
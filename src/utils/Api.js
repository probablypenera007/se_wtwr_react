// import React from "react";

const baseUrl = "http://localhost:3001";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

// GET https://localhost:3001/items
export function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
}
// Export the contents of api.js to the App component.
// Modify the corresponding Effect hook to add the items
//  to the application state from the server

// POST https://localhost:3001/items
export function addItem(item) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  }).then(checkResponse);
}


// function request(url, options) {
//   return fetch(url, options).then(checkResponse)
// }



export function deleteItem(itemId) {
  return fetch(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
  })
    .then(checkResponse)
}


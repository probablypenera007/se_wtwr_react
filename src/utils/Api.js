export const baseUrl = "http://localhost:3001";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

// export const request = (url, options) => {
//   return fetch(url, options).then(checkResponse)
// }

// GET https://localhost:3001/items
export function getItems() {
  return fetch(`${baseUrl}/items`, {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(checkResponse);
}

// POST https://localhost:3001/items
export function addItem(item) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify(item),
  }).then(checkResponse);
}

export function deleteItem(itemId) {
  return fetch(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(checkResponse);
}

export function addCardLike(itemId, token) {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  }).then(checkResponse);
}

export function removeCardLike(itemId, token) {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  }).then(checkResponse);
}

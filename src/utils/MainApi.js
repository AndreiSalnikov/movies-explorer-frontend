import { useState } from "react";

const settingUserApi = {
  baseUrl: "https://api.mestoforyou.nomoredomainsclub.ru",
  headers: {
    'Content-Type': 'application/json'
  }
}

function Api() {
  const [url, setUrl] = useState(settingUserApi.baseUrl);
  const [headers, setHeaders] = useState(settingUserApi.headers);

  const jwt = localStorage.getItem('jwt')
  if (jwt) {
    headers.authorization = "Bearer " + jwt;
  }

  function setToken(token) {
    localStorage.setItem("jwt", token);
    setHeaders({ ...headers, authorization: "Bearer " + token });
  }

  function _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  function _request(url, options) {
    return fetch(url, options).then(_checkResponse);
  }

  function getServerInfo(path) {
    return _request(`${url}${path}`, {headers})
  }

  function changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return removeServerLike(id);
    } else {
      return setServerLike(id);
    }
  }

  function editServerProfileInfo(data, path) {
    return _request(`${url}${path}`, {
      method: "PATCH", headers, body: JSON.stringify({
        name: data.name, about: data.about,
      })
    })
  }

  function addServerCard(data, path) {
    return _request(`${url}${path}`, {
      method: "POST", headers, body: JSON.stringify({
        name: data.name, link: data.link,
      })
    })
  }

  function deleteServerCard(id, path) {
    return _request(`${url}${path}/${id}`, {
      method: "DELETE", headers,
    })
  }

  function setServerLike(cardId) {
    return _request(`${url}/cards/${cardId}/likes`, {
      method: "PUT", headers,
    })
  }

  function removeServerLike(cardId) {
    return _request(`${url}/cards/${cardId}/likes`, {
      method: "DELETE", headers,
    })
  }

  function setServerAvatar(data, path) {
    return _request(`${url}${path}/avatar`, {
      method: "PATCH", headers, body: JSON.stringify({
        avatar: data.avatar,
      }),
    })
  }

  return {
    setToken,
    getServerInfo,
    changeLikeCardStatus,
    editServerProfileInfo,
    addServerCard,
    deleteServerCard,
    setServerLike,
    removeServerLike,
    setServerAvatar,
  }
}

export const api = Api();

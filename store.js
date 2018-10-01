import React from 'react'
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { API_ROOT, CLIENT_ID } from 'react-native-dotenv'

import { reducer } from './data'

// const client = axios.create({
//   baseURL: `${API_ROOT}`,
//   responseType: 'json',
//   headers: { 'Authorization': `Client-ID ${CLIENT_ID}` }
// });

const middleware = []
middleware.push(thunkMiddleware)
// middleware.push(axiosMiddleware(client))

const store = createStore(reducer, applyMiddleware(...middleware))

export default store

import * as c from './constants'
import { API_ROOT, CLIENT_ID } from 'react-native-dotenv'
import axios from 'axios'
import { normalize, schema } from 'normalizr'

import exampleData from '../example.json'

const photoSchema = new schema.Entity('photo');
const photoListSchema = [ photoSchema ]
const normalizeData = (originalData) => {
  return normalize(originalData, photoListSchema)
}

export const likePhoto = (cardId, likeCount) => ({
  type: c.LIKE_PHOTO,
  cardId,
  likeCount,
})

export const dislikePhoto = (cardId, dislikeCount) => ({
  type: c.DISLIKE_PHOTO,
  cardId,
  dislikeCount,
})

const fetchPhotosBegin = () => ({ type: c.FETCH_PHOTO })
const fetchPhotosFail = () => ({ type: c.FETCH_PHOTO_FAIL })
const fetchPhotosSuccess = (data) => ({
  type: c.FETCH_PHOTO_SUCCESS,
  idArr: data.result,
  photoObj: data.entities.photo,
})

export const getPhotos = (page, perPage) => {
  return async (dispatch) => {
    dispatch(fetchPhotosBegin)
    try {
      const res = await axios.get(`${API_ROOT}/photos/?order_by=popular&page=${page}&per_page=${perPage}&client_id=${CLIENT_ID}`)
      const data = normalizeData(res.data)
      dispatch(fetchPhotosSuccess(data))
    } catch (e) {
      console.log(e)
      dispatch(fetchPhotosFail)
    }
  }
}

// Used JSON file so I didn't make too many API calls in development
export const getPhotosFakeData = () => {
  return async (dispatch) => {
    dispatch(fetchPhotosBegin)
    const data = normalizeData(exampleData)
    dispatch(fetchPhotosSuccess(data))
  }
}
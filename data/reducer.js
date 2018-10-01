import * as c from './constants'
import exampleData from '../example.json'

const initState = {
  likeCount: 0,
  dislikeCount: 0,
  photosObject: {},
  photosIdArr: [],
  photosLoading: false,
  photosPerPage: 20,
  photoPage: 1,
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case c.FETCH_PHOTO:
      return {
        ...state,
        photosLoading: true,
      }
    case c.FETCH_PHOTO_SUCCESS:
      return {
        ...state,
        photosObject: {
          ...state.photosObject,
          ...action.photoObj,
        },
        photosIdArr: [...state.photosIdArr, ...action.idArr],
        photosLoading: false,
      }
    case c.FETCH_PHOTO_FAIL:
      return {
        ...state
      }
    case c.LIKE_PHOTO:
      return {
        ...state,
        photosObject: {
          ...state.photosObject,
          [action.cardId]: {
            ...state.photosObject[action.cardId],
            liked: true,
            disliked: false,
          }
        },
        likeCount: action.likeCount,
      }
    case c.DISLIKE_PHOTO:
      return {
        ...state,
        photosObject: {
          ...state.photosObject,
          [action.cardId]: {
            ...state.photosObject[action.cardId],
            liked: true,
            disliked: false,
          }
        },
        likeCount: action.likeCount,
      }
    default:
      return state;
  }
}

/*
categories: []
color: "#181720"
created_at: "2018-09-05T13:06:03-04:00"
current_user_collections: []
description: "red petaled flowers in bloom"
height: 6016
id: "Mg0W1N_yDv0"
liked_by_user: false
likes: 186
links: {self: "https://api.unsplash.com/photos/Mg0W1N_yDv0", html: "https://unsplash.com/photos/Mg0W1N_yDv0", download: "https://unsplash.com/photos/Mg0W1N_yDv0/download", download_location: "https://api.unsplash.com/photos/Mg0W1N_yDv0/download"}
slug: "florals-arranged-on-glass"
sponsored: false
updated_at: "2018-09-22T15:01:18-04:00"
urls: {raw: "https://images.unsplash.com/photo-1536167038724-17…aWQiOjM3ODQ1fQ&s=ac530fec0078acfd99af3a3269b7fd7d", full: "https://images.unsplash.com/photo-1536167038724-17…aWQiOjM3ODQ1fQ&s=7e29033d237caa2b2252d8ff634938f2", regular: "https://images.unsplash.com/photo-1536167038724-17…aWQiOjM3ODQ1fQ&s=cfb9016720056dd16e1f8dcfdc498c2e", small: "https://images.unsplash.com/photo-1536167038724-17…aWQiOjM3ODQ1fQ&s=af06d71843a5b52ac3953324129656dd", thumb: "https://images.unsplash.com/photo-1536167038724-17…aWQiOjM3ODQ1fQ&s=186e4b2718ff6619a3b59d0e3e954cae"}
user: {id: "zKou8F1Vm1o", updated_at: "2018-10-01T13:03:07-04:00", username: "evieshaffer", name: "Evie Shaffer", first_name: "Evie", …}
width: 4016
*/

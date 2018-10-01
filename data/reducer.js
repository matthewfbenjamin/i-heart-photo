import * as c from './constants'

const initState = {
  likeCount: 0
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case c.LIKE_PHOTO:
      return {
        ...state,
        likeCount: state.likeCount++
      }
    default:
      return state;
  }
}
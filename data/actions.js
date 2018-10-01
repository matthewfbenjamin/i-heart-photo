import * as c from './constants'

/*
export function getCafes(location) {
  console.log('in action')
  return {
    type: c.GET_CAFES,
    payload: {
      request: {
        url: `/businesses/search?term=cafe&latitude=40.781480&longitude=-73.949600`
      }
    }
  };
}
*/

export const likePhoto = () => ({ type: c.LIKE_PHOTO })

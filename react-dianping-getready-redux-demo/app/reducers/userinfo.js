/**
 * Created by xutao on 2017/5/28.
 */

const initialstate = {}

export default function rootReducer(state = initialstate, action) {
  switch (action.type) {
    case 'LOGIN':
      return action.data
    default :
      return {
        text: 'hello'
      }
  }
}
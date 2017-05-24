/**
 * Created by xutao on 2017/5/24.
 */

const inititalState = {}

export default function userinfo(state = inititalState, action) {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        text: 'Hello'
      }
    default:
      return {
        text: 'Hello'
      }
  }
}
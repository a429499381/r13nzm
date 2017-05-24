const initialstate = {
  text: 'Hello'
}

export default function Reducer(state = initialstate, action) {
  switch (action.type) {
      case 'CHANGE_TEXT':
      return {
        text: state.text == 'Hello' ? 'xutao' : 'Hello'
      }
    default:
      return {
        text: 'Hello'
      }
  }
}


const initialState={data: []  , showSuccessPopup: null}
const register = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_USERS':
    return { ...state, data: [...action.data] }
    case 'SAVE_PERSON':
    debugger;
    return{
    ...state,
    data:[...state.data,action.data.person],
    showSuccessPopup: true
    }
  case 'CLOSE_POPUP':
  return{
    ...state,
    showSuccessPopup: false
    }
    default:
    return Object.assign({}, state, initialState)
  }}
export default register

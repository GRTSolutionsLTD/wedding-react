//import data from '../actions/TodoList.json';
import Popup from '../pages/Popup';
var _=require('lodash');
// const peopleArray=[
//   { id:"123",  lastNamename: "dave", firstName:"déjà vu",email:"tzippy6160@gmail.com",password:"100", age:"23"},
//   { id:"456",  lastNamename: "chris",firstName:"déjeuner à la fourchette",email:"tzippy6160@gmail.com",password:"100", age:"23"},
//   { id:"789",  lastNamename: "bob",  firstName:"déjeuner",email:"tzippy6160@gmail.com",password:"100", age:"23"},
//   { id:"101",  lastNamename: "tom",  firstName:"dégagé",email:"tzippy6160@gmail.com",password:"100", age:"23"},
//   { id:"102",  lastNamename: "tim",  firstName:"décor",email:"tzippy6160@gmail.com",password:"100", age:"23"}
// ]

const initialState={data: []  , showSuccessPopup: false}


const register = (state = initialState, action) => {
 
  switch (action.type) {
    
    case 'GET_ALL_USERS':
    return { ...state, data: [...action.data] }


    case 'SAVE_PERSON': 
    console.log('SAVE_PERSON');
    console.log(state);
    debugger
  // if(action.data.person.id!=""&&!_.find(state.data, {id:action.data.person.id}))
  // { 
    return{
    ...state,
    data:[...state.data,action.data.person],
    showSuccessPopup: true
    }
  // }
  // else return state;
  case 'CLOSE_POPUP':
  return{
    ...state,
    showSuccessPopup: false
    }
    default:
    return Object.assign({}, state, initialState)
  }}


export default register

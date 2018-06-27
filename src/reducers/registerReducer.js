import data from '../actions/TodoList.json';
import Popup from '../pages/Popup';
var _=require('lodash');
const peopleArray=[
  { id:"123",  lastNamename: "dave", firstName:"déjà vu",email:"tzippy6160@gmail.com",password:"100", age:"23"},
  { id:"456",  lastNamename: "chris",firstName:"déjeuner à la fourchette",email:"tzippy6160@gmail.com",password:"100", age:"23"},
  { id:"789",  lastNamename: "bob",  firstName:"déjeuner",email:"tzippy6160@gmail.com",password:"100", age:"23"},
  { id:"101",  lastNamename: "tom",  firstName:"dégagé",email:"tzippy6160@gmail.com",password:"100", age:"23"},
  { id:"102",  lastNamename: "tim",  firstName:"décor",email:"tzippy6160@gmail.com",password:"100", age:"23"}
]

const initialState={people:peopleArray}

const register = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_PERSON': 
    console.log('SAVE_PERSON');
    debugger
    //  if(!_.find(this.state.peopleArray, {id: this.state.id}))
    //  {
   console.log('this.state',state);
   //state.push(action);
  return { 
    ...state,
    state: [...state, action]
  
  }
  console.log('this.state',state);
  this.openPopup();
  // }

   
    default:
    return Object.assign({}, state, initialState)
  }}


export default register

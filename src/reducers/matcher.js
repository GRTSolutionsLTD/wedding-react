import data from '../actions/TodoList.json';

const peopleArray=[
  { id:"123",  lastNamename: "dave", firstName:"déjà vu",email:"tzippy6160@gmail.com",password:"100", age:"23"},
  { id:"456",  lastNamename: "chris",firstName:"déjeuner à la fourchette",email:"tzippy6160@gmail.com",password:"100", age:"23"},
  { id:"789",  lastNamename: "bob",  firstName:"déjeuner",email:"tzippy6160@gmail.com",password:"100", age:"23"},
  { id:"101",  lastNamename: "tom",  firstName:"dégagé",email:"tzippy6160@gmail.com",password:"100", age:"23"},
  { id:"102",  lastNamename: "tim",  firstName:"décor",email:"tzippy6160@gmail.com",password:"100", age:"23"}
]

const initialState={people:peopleArray}
const matcher = (state = initialState, action) => {
  switch (action.type) {
    case 'MATCHER_SHOW_MATCHER':
    console.log('SAVE_PERSON');
    console.log("reducers-peopleArray",peopleArray.map(p=>p.firstName))
    debugger
      return {
        id: action.id,
        text: action.text,
        firstName:peopleArray.map(p=>p.firstName),
        completed: false
     
      }
    //   case 'MATCHER_SHOW_MATCHER':
    //   return {
    //     id: action.id,
    //     text: action.text,
    //     completed: false
    //   }
    // case 'TOGGLE_TODO':
    //   if (state.id !== action.id) {
    //     return state
    //   }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}
export default matcher

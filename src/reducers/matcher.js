import _ from 'lodash'
let initialState = { data: [],malesArray:[],femalesArray:[] }
const matcher = (state = initialState, action) => {
  let array=[]
  switch (action.type) {

      case 'GET_MALES':
       
      console.log("GET_MALES",state.data);
      array= state.data.filter(p=>p.sex==0&&p.status==0);
      array=_.sortBy(array, ["firstName","lastName"])

      console.log('GET_MALES');

      return {
        ...state,malesArray:array
      }

      case 'GET_FEMALES':
      array= state.data.filter(p=>p.sex==1&&p.status==0);
      array=_.sortBy(array, ["firstName","lastName"])
      console.log('GET_FEMALES');
      return {
        ...state,femalesArray:array
      }


    case 'UPDATE_MATCHER':
       
      
      console.log('UPDATE_MATCHER',state.data);
      
      return state;

     
    case 'GET_ALL_USERS':
      return { ...state, data: [...action.data] }
      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}
export default matcher

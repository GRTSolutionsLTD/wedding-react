import _ from 'lodash'
import { eSex, eStatus,eCommunity } from '../constants/enums'

const initialState={data: []  , showSuccessPopup: null,men:[],women:[]}
const register = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_USERS':
    return { ...state, data: [...action.data] }
    case 'SAVE_PERSON':
   
    return{
    ...state,
    data:[...state.data,action.data.person],
    showSuccessPopup: true
    }
    
    case 'GET_DETAILS_BYMULT':
 
//state.users=getDetailsbyMulty(state.man,state.data,action.multy)

    return {
      ...state,
  
    }
    case 'GET_MALES':
    return {
      ...state, men: getDetailsbyMulty(state.data, eSex.Male.id,action.multy)

    }
  case 'GET_FEMALES':
    return {
      ...state, women: getDetailsbyMulty(state.data, eSex.Female.id,action.multy)
    }

  case 'CLOSE_POPUP':
  return{
    ...state,
    showSuccessPopup: false
    }
    default:
    return Object.assign({}, state)
  }}
  let getDetailsbyMulty = (users,sex,multy) => {
    debugger;
    let user1 = users.filter(user => user.sex == sex && user.status == eStatus.Single.id);
    
    user1=user1.filter(p=> multy.indexOf(p.community)!=-1)
    debugger;
    return _.sortBy(user1, ["firstName", "lastName"])
  }
//   let getDetailsbyMulty = (man,users,multy) => {
// man=users.filter(p=>p.sex==0&&p.status==0)
//     users=users.filter(p=> multy.indexOf(p.community)!=-1)
   
 
//      return _.sortBy(users, ["firstName", "lastName"])
     
//   }
export default register

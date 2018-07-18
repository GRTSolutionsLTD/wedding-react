import registerApi from '../services/registerApi'
import moment from 'moment';
import * as axios from 'axios'

export const showRegister = response => ({
  type: 'REGISTER_SHOW_REGISTER',
  response
})
export const getMales = (multy) => {
    return {
        type: 'GET_MALES',
        multy:multy
    }
}
export const getFemales = (multy) => {
    return {
        type: 'GET_FEMALES',
        multy:multy
    }
}
export const getDitailsByMulty = (multy) =>{
    return {
        type: 'GET_DETAILS_BYMULT',
        multy:multy
        }
 
}
export const savePerson = (person) => (
  dispatch => {
  debugger
    return axios.post('http://localhost:3004/data/',{person})
        .then(res => {
            dispatch({
                type: 'SAVE_PERSON',
                data: res.data
            })
        })
        .catch(err => {
            console.log("error");
        }
        )
}
)
export const getAllUsers = () => (
  dispatch => {
 
      return axios.get('http://localhost:3004/data/')
          .then(res => {
              dispatch({
                  type: 'GET_ALL_USERS',
                  data: res.data
              })
          })
          .catch(err => {
              console.log("error");
          }
          )
  })
export const closePopup = () => {
  return {
  type: 'CLOSE_POPUP',
  }
}

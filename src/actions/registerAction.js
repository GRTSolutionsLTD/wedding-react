import registerApi from '../services/registerApi'
import moment from 'moment';
import * as axios from 'axios'

export const showRegister = response => ({
  type: 'REGISTER_SHOW_REGISTER',
  response
})

export const loadRegister = () => ({
  type: 'REGISTER_SHOW_LOADING'
})

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
    debugger
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

export const getRegister = () => async dispatch => {
  dispatch(loadRegister())
  const request = {
     city: 'taipei',
     search_type: 'yql',
     env: 'store://datatables.org/alltableswithkeys'
  }
  try {
    const response = await registerApi.getRegister(request)
    dispatch(showRegister(response))
  } catch(e) {
    console.error(e)
  }
}

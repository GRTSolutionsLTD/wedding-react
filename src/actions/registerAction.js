import registerApi from '../services/registerApi'
import moment from 'moment';

export const showRegister = response => ({
  type: 'REGISTER_SHOW_REGISTER',
  response
})

export const loadRegister = () => ({
  type: 'REGISTER_SHOW_LOADING'
})

export const savePerson = () => {
  return {
  type: 'SAVE_PERSON'
  }
}


export const getRegister = () => async dispatch => {
  dispatch(loadRegister())
  const request = {
    // city: 'taipei',
    // search_type: 'yql',
    // env: 'store://datatables.org/alltableswithkeys'
      id:'',
      firtName:'',
      lastName:'',
      email:'',
      password:'',
      age:'',
      selectedOption: '',
      startDate: moment(),
      isOpen: false,
      date: new Date(),
      options : [
        'female', 'male'
      ]
  }
  try {
    const response = await registerApi.getRegister(request)
    dispatch(showRegister(response))
  } catch(e) {
    console.error(e)
  }
}

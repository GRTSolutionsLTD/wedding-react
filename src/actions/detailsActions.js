import detailsApi from '../services/detailsApi'

export const showDetails = response => ({
  type: 'DETAILS_SHOW_DETAILS',
  response
})

export const loadDetails = () => ({
  type: 'DETAILS_SHOW_LOADING'
})

export const filterDetails = (e) => {
  
  console.log(e);
  return {
  type: 'DETAILS_FILTER'
  }
}

export const getDetails = () => async dispatch => {
  dispatch(loadDetails())
  const request = {
    city: 'taipei',
    search_type: 'yql',
    env: 'store://datatables.org/alltableswithkeys'
  }
  try {
    const response = await detailsApi.getDetails(request)
    dispatch(showDetails(response))
  } catch(e) {
    console.error(e)
  }
}

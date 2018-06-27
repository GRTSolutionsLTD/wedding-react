import matcherApi from '../services/matcherApi'

export const showWeather = response => ({
  type: 'MATCHER_SHOW_MATCHER',
  response
})

export const loadWeather = () => ({
  type: 'MATCHER_SHOW_MATCHER'
})
export const saveMatcher = () => {
  return {
  type: 'MATCHER_SHOW_MATCHER'
  }
}

export const getWeather = () => async dispatch => {
  dispatch(loadWeather())
  const request = {
    city: 'taipei',
    search_type: 'yql',
    env: 'store://datatables.org/alltableswithkeys'
  }
  try {
    const response = await matcherApi.getMatcher(request)
    dispatch(showWeather(response))
  } catch(e) {
    console.error(e)
  }
}

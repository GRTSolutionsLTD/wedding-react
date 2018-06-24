const initialState = {
  loading: false,
  city: 'Initial',
  date: 'Initial',
  temp: 'Initial',
  text: 'Initial'
}

const DetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Details_SHOW_LOADING':
      return Object.assign({}, state, {
        loading: true
      })

    case 'Details_SHOW_Details':
      const location = action.response.query.results.channel.location
      const condition = action.response.query.results.channel.item.condition
      return Object.assign({}, state, {
        loading: false,
        city: location.city,
        date: condition.date,
        temp: condition.temp,
        text: condition.text
      })

    default:
      return Object.assign({}, state, initialState)
  }
}

export default DetailsReducer

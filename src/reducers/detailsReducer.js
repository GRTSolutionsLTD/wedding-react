const peopleArray=[
  { id:"123",  lastNamename: "dave", firstName:"déjà vu",email:"tzippy6160@gmail.com",status:1,password:"100", age:"23"},
  { id:"456",  lastNamename: "chris",firstName:"déjeuner à la fourchette",email:"tzippy6160@gmail.com",status:1,password:"100", age:"23"},
  { id:"789",  lastNamename: "bob",  firstName:"déjeuner",email:"tzippy6160@gmail.com",status:1,password:"100", age:"23"},
  { id:"101",  lastNamename: "tom",  firstName:"dégagé",email:"tzippy6160@gmail.com",status:1,password:"100", age:"23"},
  { id:"102",  lastNamename: "tim",  firstName:"décor",email:"tzippy6160@gmail.com",status:1,password:"100", age:"23"}
]

const initialState={people:peopleArray}

const DetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DETAILS_FILTER':
    debugger
      console.log('filterDetails');
      debugger
      return Object.assign({}, state, {
        loading: true
      })

    case 'DETAILS_SHOW_DETAILS':
      //const location = action.response.query.results.channel.location
      //const condition = action.response.query.results.channel.item.condition
      return Object.assign({}, state, {
        loading: false
        //city: location.city,
        //date: condition.date,
        //temp: condition.temp,
        //text: condition.text
      })

    default:
      return Object.assign({}, state, initialState)
  }
}

export default DetailsReducer


import _ from 'lodash';

import { eSortDirection } from '../constants/enums';



const initialState = { data: [] }



const DetailsReducer = (state = initialState, action) => {

const { data, displayData } = state;



switch (action.type) {



case 'DETAILS_FILTER':

return {

...state,

displayData: getFilterUsers([...data],action.search)

}



case 'GET_ALL_DELAILS':

return {

...state,

data: action.data.data,

displayData: action.data.data

}



case 'SORT_DATES':

return {

...state,

displayData: sortUsersByDates([...displayData], action.orderBy)

}



default:

return Object.assign({}, state, initialState)

}

}





let getFilterUsers = (users, searchValue) => {

return _.filter(users, user => user.status == searchValue);

}



let sortUsersByDates = (users, sortDirection) => {

debugger

if (sortDirection == eSortDirection.Ascending.id)

return users.sort((a, b) => new Date(a.date) - new Date(b.date));



return users.sort((a, b) => new Date(b.date) - new Date(a.date));

}



export default DetailsReducer
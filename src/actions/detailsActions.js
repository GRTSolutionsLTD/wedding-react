
import axios from 'axios';



import * as url from '../../src/urls.json';

export const filterDetails = (searchType) => {

return {

type: 'DETAILS_FILTER',

search: searchType

}

}



export const getAllDetails = () => (

dispatch => {

return axios.get(url.baseUrl+url.actions.getUsers)

.then(res => {

dispatch({

type: 'GET_ALL_DELAILS',

data: res

})

})

.catch(err => {

console.log("error");

}

)

})



export const sortDetailsByDates = (DescendingOrAscending) => {

return {

type: 'SORT_DATES',

orderBy: DescendingOrAscending

}

}



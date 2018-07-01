import detailsApi from '../services/detailsApi'
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import axios from 'axios';

export const showDetails = response => ({
  type: 'DETAILS_SHOW_DETAILS',
  response
})

export const loadDetails = () => ({
  type: 'DETAILS_SHOW_LOADING'
})

export const filterDetails = (searchType) => {
  return{
    type: 'DETAILS_FILTER',
    search:searchType
  }
}
 
  export const getAllDetails = () => (
    dispatch => {
      debugger
        return axios.get('http://localhost:3004/data/')
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
    export const sortDates=(mode)=>{
      return{
        type:'SORT_DATES',
        orderBy:mode
      }
    }
// export const filterDetails = (filter) => {
//   debugger
//   //console.log(e);
//   return {
//   type: 'DETAILS_FILTER',
//   filterBy:filter
//   }
// }

// export const getDetails = () => async dispatch => {
//   dispatch(loadDetails())
//   const request = {
//     city: 'taipei',
//     search_type: 'yql',
//     env: 'store://datatables.org/alltableswithkeys'
//   }
//   try {
//     const response = await detailsApi.getDetails(request)
//     dispatch(showDetails(response))
//   } catch(e) {
//     console.error(e)
//   }
// }

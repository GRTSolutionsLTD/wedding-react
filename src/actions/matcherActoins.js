import matcherApi from '../services/matcherApi'
import * as axios from 'axios';
import fetch from 'isomorphic-fetch'

export const showWeather = response => ({
  type: 'MATCHER_SHOW_MATCHER',
  response
})

export const loadWeather = () => ({
  type: 'MATCHER_SHOW_MATCHER'
})
export const getMales = () => {

    console.log("getMales")
  return {
  type: 'GET_MALES',
  
  
  }
}

export const getFemales = () => {
 
    console.log("getFemales")
  return {
  type: 'GET_FEMALES', 
  }
}
// export const updateMatcher = (id,obj) => (
//   dispatch => {
//     
//       return axios.put(`http://localhost:3004/data/${id}`,obj)
//           .then(res => {
//               dispatch({
//                   type: 'UPDATE_MATCHER',
//               })
//           })
//           .catch(err => {
//               console.log("error");
//           }
//           )
//   })
  export function updateMatcher(id1,obj1,id2,obj2){
       
    return (dispatch) => {

         axios.put(`http://localhost:3004/data/${id1}`,obj1).then(()=>{
             console.log();
             axios.put(`http://localhost:3004/data/${id2}`,obj2).then(({})=>{
                dispatch({
                    type: 'UPDATE_MATCHER',
                    //payload: data.data
                });
            });
        });
    }
}
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
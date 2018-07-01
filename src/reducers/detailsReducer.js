var _ = require('lodash');
const initialState = { data: [] }

const DetailsReducer = (state = initialState, action) => {
  let arr = [];
  const { data } = state;
  switch (action.type) {
    case 'DETAILS_FILTER':
      arr = [...data];
      debugger
      console.log('filterDetails');
      debugger
     arr = arr.filter(p => action.search == "" || p.status == action.search);
    //  arr=(_.filter(arr, function(o) { 
    //     return (action.serach==""||o.status == action.search)
    // }))
      return {
        ...state,
        displayData: arr
      }

    case 'GET_ALL_DELAILS':
      console.log('GET_ALL_DELAILS');
      debugger
      return {
        ...state,
        data: action.data.data,
        displayData: action.data.data
      }

    case 'SORT_DATES':
    debugger
    console.log('SORT_DATES');
      arr = [...data];
      debugger
      console.log('sortDates');
      debugger
      if(action.orderBy=='Ascending')
            {arr=arr.sort(function(a,b){ return new Date(a.date) - new Date(b.date);  });}
      else  {arr=arr.sort(function(a,b){ return new Date(b.date) - new Date(a.date);  });}
      return {
        ...state,
        displayData: arr
      }

    default:
      return Object.assign({}, state, initialState)
  }
}

export default DetailsReducer

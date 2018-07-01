import React from 'react';
//import {filterDetails} from '../actions/detailsActions';
import { Grid,GridColumn as Column ,GridCell  } from '@progress/kendo-react-grid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllDetails ,sortDates,filterDetails} from '../actions/detailsActions';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Moment from 'react-moment';
import 'moment-timezone';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';

var _ = require('lodash');
const dateTime = require('date-time');

// class CustomCell extends GridCell {
//   render() {
//       return (
//           <td>
//               <input disabled type="checkbox" checked={this.props.dataItem[this.props.field]} />
//           </td>
//       );
//   }
// }

class Details extends React.Component{
  constructor(props) {
     super(props)
     this.state = {
       sort:['Ascending','Descending'],
                     ez:[],
                    //  list: [{id:'206742900', firstName:'tomar',lastName:'shtul' ,status:'2', date:'27/01/2018'},
                    //         {id:'318954799', firstName:'chaya',lastName:'yabrov',status:'1', date:'01/01/1998'},
                    //         {id:'111111111', firstName:'tzipi',lastName:'fried' ,status:'1', date:'01/02/1999'},
                    //         {id:'222222222', firstName:'gil',  lastName:'eizen' ,status:'2', date:'10/10/2018'},
                    //         {id:'333333333', firstName:'tovi', lastName:'walder',status:'1', date:'10/09/2010'},
                    //         {id:'444444444', firstName:'ariel',lastName:'yomov' ,status:'2', date:'01/05/2016'},
                    //         {id:'555555555', firstName:'asher',lastName:'popooo',status:'2', date:'05/05/2015'},
                    //         {id:'666666666', firstName:'moshe',lastName:'shalom',status:'2', date:'10/02/2013'},
                    //         {id:'777777777', firstName:'shira',lastName:'zilber',status:'1', date:'01/10/1998'},
                    //         {id:'888888888',firstName:'ayala', lastName:'ungar',status:'1', date:'01/02/2000'},
                    //         {id:'999999999', firstName:'tomar',lastName:'shtul' ,status:'2', date:'27/01/2018'},
                    //         {id:'010101010', firstName:'tomar',lastName:'shtul' ,status:'2', date:'27/01/2018'}]
                     };
      this.state.ez=this.state.list;//מערך עזר
  }
  componentWillMount()
  {
    this.props.getAllDetails();
  }
  
    handleClick=()=> {
    //this.props.actions.getDetails();
  }

  hasLoaded=()=> {
    //return this.props.DetailsState.city === 'Initial'
  }

  isLoading=()=> {
    return this.props.detailsState.loading
  }

  Spinner=()=> {
    return <div className="c-details__spinner"></div>
  }

  // Button=()=> {
  //   const { loading } = this.props.DetailsState
  //   return loading ? this.Spinner() : <button onClick={this.handleClick.bind(this)}>Click Me!</button>
  // }

  Information=()=> {
    return (
      <p className="title">All Details:</p>
    )
  }

  searchByStatus=(e)=>{
    debugger;
    console.log(e);
    this.props.filterDetails(e.search);
  //   if(e.search=="")
  //   {
  //     this.setState({list:this.state.ez});
  //   }
  //  else{
  //   const arr=(_.filter(this.state.list, function(o) { 
  //     return o.status == e.search; 
  //  }))
  //   this.setState({list:arr});};
  }

  sortByDate=(mode)=>{
    // debugger;
    // console.log(mode);
    this.props.sortDates(mode.value);
    // let arr3=this.props.data;
    // if(mode.value=='Ascending')
    // {
    //   debugger
    //   arr3=arr3.sort(function(a,b){ return new Date(a.date) - new Date(b.date);
    //   });
    //   //arr3=arr3.sort(function(a,b) {return (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0);} );
    //   console.log(arr3);
    // }
    // else   
    // {
    //   debugger
    //   arr3=arr3.sort(function(a,b){ return new Date(b.date) - new Date(a.date);
    //   });
    //   //arr3=arr3.sort(function(a,b) {return (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0);} );
    //   //this.setState({list:arr3});
    //   console.log(arr3=_.sortBy(arr3, function(o) { return new Moment(o.date); }));
    // }
  }

  render() {
     return (
       <div>
      {/* <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}
      <Grid
      style={{ height: '600px',width:'645px' }}
      data={this.props.data}>
      <Column field="id" title="ID" width="180px" />
      <Column field="lastName" title="lastName" width="100px"/>
      <Column field="firstName" title="firstName" width="100px"/>
      <Column field="status" title="status" width="90px" />
      <Column field="date" title="date" width="150px" />
      {/* <Column field="Discontinued" title="Discontinued" width="120px" cell={CustomCell} /> */}
  </Grid> 
  <input
            className="form-control"
            type="text"
            placeholder="search by status:   0=female, 1=male"
            onChange={event=>this.searchByStatus({search:event.target.value})}
            //onChange={event=>this.props.filterDetails({search:event.target.value})}
            />
      {/* <button value="sortByDateAscending"  onClick={this.sortByDate.bind(this, 'Ascending')}>sort by date - Ascending</button> */}
      {/* <button value="sortByDateDescending" onClick={this.sortByDate.bind(this, 'Descending')}>sort by date - Descending</button> */}
      <Dropdown options={this.state.sort} onChange={this.sortByDate} placeholder="sort Descending or Ascending"/>
  </div>
 )
   }
}

const mapStateToProps = (state) => {
  debugger
  return {
    data:state.detailsResucer.displayData
  };
}

  const mapDispatchToProps = (dispatch)=>{
  debugger
  return{
    filterDetails:(search)=>dispatch(filterDetails(search)),
    getAllDetails:()=>dispatch(getAllDetails()),
    sortDates:(mode)=>dispatch(sortDates(mode))
  }; 
  
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Details)

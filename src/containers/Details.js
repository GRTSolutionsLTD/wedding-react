import React from 'react';
import {filterDetails} from '../actions/detailsActions';
import { Grid,GridColumn as Column ,GridCell  } from '@progress/kendo-react-grid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Moment from 'react-moment';
import 'moment-timezone';
//import * as detailsActions from '../actions/detailsActions';
import 'react-table/react-table.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactTable from 'react-table';
import DateTime from 'date-time';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
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
                     list: [{id:1, firstName:'tomar',lastName:'shtul' ,status:'2', date:'27/01/2018'},
                            {id:2, firstName:'chaya',lastName:'yabrov',status:'1', date:'01/01/1998'},
                            {id:3, firstName:'tzipi',lastName:'fried' ,status:'1', date:'01/02/1999'},
                            {id:4, firstName:'gil',  lastName:'eizen' ,status:'2', date:'10/10/2018'},
                            {id:5, firstName:'tovi', lastName:'walder',status:'1', date:'10/09/2010'},
                            {id:6, firstName:'ariel',lastName:'yomov' ,status:'2', date:'01/05/2016'},
                            {id:7, firstName:'asher',lastName:'popooo',status:'2', date:'05/05/2015'},
                            {id:8, firstName:'moshe',lastName:'shalom',status:'2', date:'10/02/2013'},
                            {id:9, firstName:'shira',lastName:'zilber',status:'1', date:'01/10/1998'},
                            {id:10,firstName:'ayala', lastName:'ungar',status:'1', date:'01/02/2000'}]
                     };
      this.state.ez=this.state.list;//מערך עזר
  }
  handleClick=()=> {
    //this.props.actions.getDetails();
  }

  hasLoaded=()=> {
    return this.props.DetailsState.city === 'Initial'
  }

  isLoading=()=> {
    return this.props.detailsState.loading
  }

  Spinner=()=> {
    return <div className="c-details__spinner"></div>
  }

  Button=()=> {
    const { loading } = this.props.DetailsState
    return loading ? this.Spinner() : <button onClick={this.handleClick.bind(this)}>Click Me!</button>
  }

  Information=()=> {
    return (
      <p>All Details:</p>
    )
  }

  searchByStatus=(e)=>{
    console.log(e);
    if(e.search=="")
    {
      this.setState({list:this.state.ez});
    }
   else{
    const arr=(_.filter(this.state.list, function(o) { 
      return o.status == e.search; 
   }))
    this.setState({list:arr});};
  }

  sortByDate=(mode)=>{
    const arr3=this.state.list;
    if(mode.value=='Ascending')
    {
      arr3.sort(function(a,b) {return (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0);} );
      this.setState({list:arr3});
    }
    else  
    {
      arr3.sort(function(a,b) {return (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0);} );
      this.setState({list:arr3});
      //console.log(this.state.arr=_.sortBy(this.state.list, function(o) { return new Moment(o.date); }));
    }
  }

  render() {
     return (
       <div>
      <Grid
      style={{ height: '400px' }}
      data={this.state.list}>
      <Column field="id" title="ID" width="40px" />
      <Column field="lastName" title="lastName" />
      <Column field="firstName" title="firstName" width="100px"/>
      <Column field="status" title="status" width="80px" />
      <Column field="date" title="date" width="80px" />
      {/* <Column field="Discontinued" title="Discontinued" width="120px" cell={CustomCell} /> */}
  </Grid> 
  <input
            className="form-control"
            type="text"
            placeholder="search by status:   1=female, 2=male"
            onChange={event=>this.searchByStatus({search:event.target.value})}
            //onChange={event=>this.props.filterDetails({search:event.target.value})}
            />
      {/* <button value="sortByDateAscending"  onClick={this.sortByDate.bind(this, 'Ascending')}>sort by date - Ascending</button> */}
      {/* <button value="sortByDateDescending" onClick={this.sortByDate.bind(this, 'Descending')}>sort by date - Descending</button> */}
      <Dropdown options={this.state.sort} onChange={this.sortByDate} placeholder="sort Descending or Ascending"/>
      <button onClick={this.props.filterDetails}
            className="btn btn-primary"
            type="button">
            redux
        </button>
  </div>
 )
   }
}

const mapStateToProps = (state) => {
  
  return {
  };
}

  const mapDispatchToProps = (dispatch)=>{
  
  return{
    filterDetails:()=>dispatch(filterDetails()) 
  }; 
  
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Details)

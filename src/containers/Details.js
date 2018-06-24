import React from 'react';
import { Grid,GridColumn as Column ,GridCell  } from '@progress/kendo-react-grid';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Moment from 'react-moment';
import 'moment-timezone';
import * as detailsActions from '../actions/detailsActions'

class CustomCell extends GridCell {
  render() {
      return (
          <td>
              <input disabled type="checkbox" checked={this.props.dataItem[this.props.field]} />
          </td>
      );
  }
}

class Details extends React.Component{
  constructor(props) {
     super(props)
     this.state = {
       arr:[],
                     list: [{id:1, firstName:'tomar',lastName:'shtul' ,status:'2', date:'05/05/2015'},
                            {id:2, firstName:'chaya',lastName:'yabrov',status:'1',date:'04/04/2014'},
                            {id:3, firstName:'tzipi',lastName:'fried' ,status:'1',date:'03/03/2013'},
                            {id:4, firstName:'gil',lastName:'eizen' ,status:'2', date:'02/02/2012'},
                            {id:5, firstName:'tovi',lastName:'walder',status:'1',date:'01/01/2011'},], 
                     counter: 0 };
    this.handleClick = this.handleClick.bind(this)
    this.hasLoaded = this.hasLoaded.bind(this)
    this.isLoading = this.isLoading.bind(this)
    this.Spinner = this.Spinner.bind(this)
    //this.Button = this.Button.bind(this)
    this.Information = this.Information.bind(this)
    this.searchByStatus=this.searchByStatus.bind(this)
    this.sortByDate=this.sortByDate.bind(this)
    this.state.arr=this.state.list;
  }
      
  handleClick() {
    //this.props.actions.getDetails();
  }

  hasLoaded() {
    return this.props.DetailsState.city === 'Initial'
  }

  isLoading() {
    return this.props.detailsState.loading
  }

  Spinner() {
    return <div className="c-details__spinner"></div>
  }

  // Button() {
  //   const { loading } = this.props.DetailsState
  //   return loading ? this.Spinner() : <button onClick={this.handleClick.bind(this)}>Click Me!</button>
  // }

  Information() {
    return (
      <p>All Details:</p>
    )
  }

  searchByStatus(e){
    console.log(e);
   this.state.arr=( this.state.list.filter(function(p){
    return  p.status==e.search;
    }));
    console.log("arr:",this.state.arr);
  }

  sortByDate(){
    console.log(this.state.arr.map(p=>p.date).sort());
    console.log('sortByDate works!');
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
      <Column field="bornDate" title="bornDate" width="80px" />
      <Column field="Discontinued" title="Discontinued" width="120px" cell={CustomCell} />
  </Grid> 
  <input
            className="form-control"
            type="text"
            placeholder="search"
            onChange={event=>this.searchByStatus({search:event.target.value})}/>
      <button value="sortByDate" onClick={this.sortByDate}>sort by bornDate</button>
  </div>
   //<Moment>{dateToFormat}</Moment>

  //    <table>
  //      <tr>
  //        <th>id</th>
  //        <th>last name</th>
  //        <th>status</th>
  //        <th>date</th>
  //      </tr>
  //     {this.state.arr.map(p=><tr><td>{p.id}</td><td>{p.lastName}</td><td>{p.status}</td><td>{p.date}</td></tr>)}
  //      <input
  //           className="form-control"
  //           type="text"
  //           placeholder="search"
  //           onChange={event=>this.searchByStatus({search:event.target.value})}/>
  //     <button value="sortByDate" onClick={this.sortByDate}>sort by bornDate</button>
  //   </table>
  //
 )
   }
}

export default connect(
  state => ({
  DetailsState: state.DetailsReducer
  }),
  dispatch => ({
    actions: bindActionCreators(detailsActions, dispatch)
  })
)(Details)

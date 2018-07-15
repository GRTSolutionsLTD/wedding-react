import React from 'react';
import { connect } from 'react-redux';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import Dropdown from 'react-dropdown'
import 'moment-timezone';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dropdown/style.css';
import { getAllDetails, sortDetailsByDates, filterDetails } from '../actions/detailsActions';
import { eeStatus, eSortDirection } from '../constants/enums';

class Details extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: [{
        value: eeStatus.Married.id,
        label: eeStatus.Married.value
      },
      {
        value: eeStatus.Single.id,
        label: eeStatus.Single.value
      }],
      orderBy: [{
        value: eSortDirection.Descending.id,
        label: eSortDirection.Descending.value
      },
      {
        value: eSortDirection.Ascending.id,
        label: eSortDirection.Ascending.value
      }]
    };
  }
  //react lifecycle
  componentWillMount() {
    this.props.getAllDetails();
  }
  //functions
  isLoading = () => {
    return this.props.detailsState.loading
  }
  Spinner = () => {
    return <div className="c-details__spinner"></div>
  }
  Information = () => {
    return (
      <p className="title">All Details:</p>
    )
  }
  searchByStatus = (searchByStatus) => {
    this.props.filterDetails(searchByStatus.value);
  }
  sortDetailsByDates = (DescendingOrAscending) => {
    this.props.sortDetailsByDates(DescendingOrAscending.value);
  }
  render() {
    return (
      <div className="details">
        <Grid
          style={{ height: '550px', width: '645px' }}
          data={this.props.data}>
          <Column field="id" title="ID" width="180px" />
          <Column field="lastName" title="Last Name" width="100px" />
          <Column field="firstName" title="First Name" width="100px" />
          <Column field="status" title="status" width="90px" />
          <Column field="date" title="Born Date" width="150px" format="{0: yyyy-MM-dd HH:mm:ss}" />
        </Grid>
        <Dropdown options={this.state.status} onChange={this.searchByStatus} placeholder="sort by date: Merried or Single" />
        <Dropdown options={this.state.orderBy} onChange={this.sortDetailsByDates} placeholder="sort by date: Descending or Ascending" />
      </div>
    )
  }
}
//map states and props
const mapStateToProps = (state) => {
  return {
    data: state.detailsResucer.displayData
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAllDetails: () => dispatch(getAllDetails()),
    filterDetails: (search) => dispatch(filterDetails(search)),
    sortDetailsByDates: (DescendingOrAscending) => dispatch(sortDetailsByDates(DescendingOrAscending))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Details)
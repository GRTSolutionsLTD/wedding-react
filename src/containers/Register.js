
import React from 'react'

import {Component } from 'react';

import Dropdown from 'react-dropdown';

import DatePicker from 'react-datepicker';

import moment from 'moment';

import { connect } from 'react-redux';

import { savePerson } from '../actions/registerAction';

import { getAllUsers } from '../actions/registerAction';

import { closePopup } from '../actions/registerAction';

import 'react-datepicker/dist/react-datepicker.css';

import Popup from '../pages/Popup';

import SubscriptionForm from '../pages/SubscriptionForm';

import { Link } from 'react-router'

import * as _ from 'lodash';

import {eSex,eStatus} from '../constants/enums'

import * as popupConfig from '../constants/popupConfig.json';



class SignUp extends Component {

person = { id: '', lastName: '', firstName: '', email: '', password: '', age: '', selectedOption: '', startDate: moment(), status:'' }



constructor(props, context) {

super(props, context);

this.state = {

selectedOption: '',

startDate: moment(),

date: new Date(),

isOpen: false, 

errorEmail:"",

options: [

{

value:eSex.Male.id,

label:eSex.Male.value},

{

value:eSex.Female.id,

label:eSex.Female.value}

],

contentPopup:''

};

this.handleChange = this.handleChange.bind(this);

this.handleChangeDate = this.handleChangeDate.bind(this);

}

//react lifecycle 

componentWillMount() {

this.props.getAllUsers();



}

componentDidMount() {

this.timerID = setInterval(

() => this.tick(),

1000

);

}

componentWillUnmount() {

clearInterval(this.timerID);

}

componentWillReceiveProps(nextProps) {

// if (nextProps.length > this.props.length) {

// this.openPopup();

// }

this.setState({errorEmail:""})

console.log("componentWillReceiveProps",this.props.showSuccessPopup)

if(this.props.showSuccessPopup!=null)

{

if(this.props.showSuccessPopup==true)

{

debugger;

this.setContextPopup(true);

}


if(this.props.showSuccessPopup==false)

{

debugger;

this.closePopup();

}

}

}

//functions

tick() {

this.setState({ date: new Date() });

}

handleChange = (selectedOption) => {

this.setState({ selectedOption });

if (selectedOption) {

// console.log(`Selected: ${selectedOption.label}`);

}

}

handleChangeDate(date) {

this.setState({ startDate: date });

}

signUp = (event) => {

this.onSubmit();

if (!_.find(this.props.data, { id:this.person.id })) {

this.props.savePerson(this.person);

}

else{

this.setContextPopup(false);

}

}

onSubmit = () => {

if (!this.validateEmail(this.person.email)) {



} else {

this.setState({errorEmail:"email not valid"})

}

if (!this.validateFirstName(this.person.firstName)) {



} else {

}

if (!this.validateLastName(this.person.lastName)) {

} else {

}

if (!this.validateId(this.person.id)) {

} else {

}



if (!this.validateAge(this.person.age)) {

} else {

}

}

openPopup = () => {

debugger;


this.setState({ isOpen: true });

}

closePopup = () => {

this.setState({ isOpen: false });

this.props.closePopup();

}

updatePersonProps = (event) => {

let personProperty = event.target.id;

this.person[personProperty] = event.target.value;

}

setContextPopup=(isTrue)=>{

debugger;

if(isTrue==true)

{

this.setState({contentPopup:popupConfig.message.register.good});}

else{

this.setState({contentPopup:popupConfig.message.register.exist});

}

this.openPopup();

}



//////////////////////////////////////////////validation

validateEmail = (email) => {

var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

return regex.test(email);

};

validateFirstName = (firstName) => {

var regex = /^[a-zA-Z\s]*$/;

return regex.test(firstName);

};

validateLastName = (lastName) => {

var regex = /^[a-zA-Z\s]*$/;

return regex.test(lastName);

};

validateId = (id) => {

var regex = /^([0-9]{9})$/;

return regex.test(id);

};

validateAge = (age) => {

var regex= /^([0-9]{1,2})$/;

return regex.test(age);

};

//////////////////////////////////////////////validation



render() {

const { selectedOption } = this.state;

return (

<div className="form-inline sign-in-form">

<h2>Sign Up</h2>

<h2>It is {this.state.date.toLocaleTimeString()}.</h2>

<div className="form-group">

<DatePicker

todayButton={"today"}

selected={this.state.startDate}

onChange={this.handleChangeDate}

/>

{<input

className="form-control"

type="text"

placeholder="id"

required

id="id"

onChange={(event) => this.updatePersonProps(event)}

/>}

<input

className="form-control"

type="text"

placeholder="first-name"

id="first-name"

onChange={(event) => this.updatePersonProps(event)}

/>

<input

className="form-control"

type="text"

placeholder="last-name"

id="last-name"

onChange={(event) => this.updatePersonProps(event)}

/>

<input

className="form-control"

type="text"

placeholder="age"

id="age"

onChange={(event) => this.updatePersonProps(event)}

/>

<Dropdown

className="form-control sign-in-drop-down"

options={this.state.options}

placeholder="Select an option"

id="status"

value={selectedOption}

onChange={this.handleChange}


/>

<input

className="form-control"

type="text"

placeholder="email"

id="email"

onChange={(event) => this.updatePersonProps(event)}


/>

{this.state.errorEmail}

<input

className="form-control"

type="password"

style={{ marginRight: '5px' }}

placeholder="password"

id="password"

onChange={(event) => this.updatePersonProps(event)}

/>

<button

className="c-button"

type="button"

onClick={(event) => this.signUp(event)}

>

Sign Up

</button>

<Link className="c-button" to="matcher">

Cancel-matcher

</Link>

<Popup show={this.state.isOpen}

onClose={this.props.closePopup}>

{/* { <SubscriptionForm></SubscriptionForm> } */}

<button className="popup-close" onClick={()=>this.closePopup()}>x</button>

{this.state.contentPopup}

</Popup>

</div>

</div>

)

}

}

const mapStateToProps = (state) => {


console.log(state);

return {

data: state.register.data,

showSuccessPopup: state.register.showSuccessPopup,

// closePopup: state.register.showSuccessPopup

};

}

const mapDispatchToProps = (dispatch) => {

return {

getAllUsers: () => { dispatch(getAllUsers()) },

savePerson: (person) => { dispatch(savePerson(person)) },

closePopup: () => {debugger; dispatch(closePopup()) }

};

}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)


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
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
// import validator from 'validator';
import * as validator from 'validator';

 

const required = (value) => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return 'require';
  }
};
 
const emailFormat = (value) => {
  if (!validator.isEmail(value)) {
    return `${value} is not a valid email.`
  }
};
const idFormat = (value) => {
    if(!(/^[0-9]*$/i.test(value)))
    return `${value} is not a valid id. id includes just numbers.`
    if( !(value.length >= 9 && value.length <=10))
    return `${value} is not a valid id. id length is 9 chars.`
  };
  const firstnameFormat = (value) => {
    if(!(/^[a-zA-Z\s]*$/i.test(value))){
    return `${value} is not a valid first name. first name can include just letters and spaces.`}
  };
  const lastnameFormat = (value) => {
    if(!(/^[a-zA-Z\s]*$/i.test(value))){
    return `${value} is not a valid last name. last name can include just letters and spaces.`}
  };
  const ageFormat = (value) => {
    if((!(/^([0-9]{1,3})$/i.test(value)))||!(value<120)){
    return `${value} is not a valid age. age is till 120 years and includes just numbers.`}
  };
const lt = (value, props) => {
  // get the maxLength from component's props
  if (!value.toString().trim().length > props.maxLength) {
    // Return jsx
    return <span className="error">The value exceeded {props.maxLength} symbols.</span>
  }
};
 
const password = (value, props, components) => {
  // NOTE: Tricky place. The 'value' argument is always current component's value.
  // So in case we're 'changing' let's say 'password' component - we'll compare it's value with 'confirm' value.
  // But if we're changing 'confirm' component - the condition will always be true
  // If we need to always compare own values - replace 'value' with components.password[0].value and make some magic with error rendering.
  if (value !== components['confirm'][0].value) { // components['password'][0].value !== components['confirm'][0].value
    // 'confirm' - name of input
    // components['confirm'] - array of same-name components because of checkboxes and radios
    return <span className="error">Passwords are not equal.</span>
  }
};


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
if(this.props.showSuccessPopup!=null){
if(this.props.showSuccessPopup==true){
this.setContextPopup(true);
}
if(this.props.showSuccessPopup==false){
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
  debugger
  console.log(this.props.data);
this.onSubmit();
if (!_.find(this.props.data, { id:this.person.id })) {
this.props.savePerson(this.person);
}
else{
this.setContextPopup(false);
}
}
onSubmit = () => {
if (!this.validateEmail(this.person.email)) {} else {}
if (!this.validateFirstName(this.person.firstName)) {} else {}
if (!this.validateLastName(this.person.lastName)) {} else {}
if (!this.validateId(this.person.id)) {} else {}
if (!this.validateAge(this.person.age)) {} else {}
}
openPopup = () => {
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
if(isTrue==true){
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
return<Form>
<div className="form-inline sign-in-form">
<h2>Sign Up</h2>
<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
<div className="form-group">
<DatePicker
todayButton={"today"}
selected={this.state.startDate}
onChange={this.handleChangeDate}
/>
<Input
className="form-control"
type="text"
placeholder="id"
id="id"
onChange={(event) => this.updatePersonProps(event)}
name='id' validations={[required,idFormat]}
/>
<Input
className="form-control"
type="text"
placeholder="first-name"
id="first-name"
onChange={(event) => this.updatePersonProps(event)}
name='firstname' validations={[required,firstnameFormat]}
/>
<Input
className="form-control"
type="text"
placeholder="last-name"
id="last-name"
onChange={(event) => this.updatePersonProps(event)}
name='lastname' validations={[required,lastnameFormat]}
/>
<Input
className="form-control"
type="text"
placeholder="age"
id="age"
onChange={(event) => this.updatePersonProps(event)}
name='age' validations={[required,ageFormat]}
/>
<Dropdown
className="form-control sign-in-drop-down"
options={this.state.options}
placeholder="Select an option"
id="status"
value={selectedOption}
onChange={this.handleChange}
/>
<Input
className="form-control"
type="text"
placeholder="email"
id="email"
onChange={(event) => this.updatePersonProps(event)}
name='email' validations={[required,emailFormat]}
/>
<Input
className="form-control"
type="password"
style={{ marginRight: '5px' }}
placeholder="password"
id="password"
onChange={(event) => this.updatePersonProps(event)}
name='password' validations={[required]}
/>
<button
className="c-button"
type="button"
onClick={(event) => this.signUp(event)}
// disabled={{valid: false}}
>
Sign Up
</button>
<Link className="c-button" to="matcher">
Cancel-matcher
</Link>
<Popup show={this.state.isOpen}
onClose={this.props.closePopup}>
{/* { <SubscriptionForm></SubscriptionForm> } */}
<button className="popup-close" 
onClick={()=>this.closePopup()}>x</button>
{this.state.contentPopup}
</Popup>
</div>
</div>
<a href="https://api.whatsapp.com/send?phone=+0504126160&text=Hi, I contacted you Through your website.">whatsapp me</a>
<a href="callto://050-4126160">Call Me</a>
<a href="mailto:tzippy6160@gmail.com">Example Email</a>
</Form>;
}
}
const mapStateToProps = (state) => {
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
closePopup: () => { dispatch(closePopup()) }
};
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)


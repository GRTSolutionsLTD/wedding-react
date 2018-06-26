import React,{ Component } from 'react';
import Dropdown from 'react-dropdown';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import Popup from './Popup';
import SubscriptionForm from './SubscriptionForm';
import { Link } from 'react-router'
var _=require('lodash');


const peopleArray = [
  { id:"123",  lastNamename: "dave", firtName:"déjà vu",email:"tzippy6160@gmail.com",password:"100", age:"23"},
  { id:"456",  lastNamename: "chris",firtName:"déjeuner à la fourchette",email:"tzippy6160@gmail.com",password:"100", age:"23"},
  { id:"789",  lastNamename: "bob",  firtName:"déjeuner",email:"tzippy6160@gmail.com",password:"100", age:"23"},
  { id:"101",  lastNamename: "tom",  firtName:"dégagé",email:"tzippy6160@gmail.com",password:"100", age:"23"},
  { id:"102",  lastNamename: "tim",  firtName:"décor",email:"tzippy6160@gmail.com",password:"100", age:"23"}
]
const options = [
  'female', 'male'
]
class SignUp extends Component{
 constructor(props, context){
   super(props, context);
    this.state={
      id:'',
      firtName:'',
      lastName:'',
      email:'',
      password:'',
      age:'',
      selectedOption: '',
      startDate: moment(),
      isOpen: false
    };  
   this.handleChange = this.handleChange.bind(this);
   this.handleChangeDate = this.handleChangeDate.bind(this);
 }

 handleChange = (selectedOption) => {
  this.setState({ selectedOption });
  if (selectedOption) {
    console.log(`Selected: ${selectedOption.label}`);
  }
 }
 handleChangeDate(date) {
  this.setState({
      startDate: date
  });
}
signUp(){
  debugger
  _.deburr("déjà vu");
  if(!_.find(peopleArray, {id: this.state.id}))
   {
    console.log('this.state',this.state);
    console.log(peopleArray);
    peopleArray.push(this.state);
    console.log(peopleArray);
    this.openPopup();
  }
}

openPopup = () => {
  this.setState({
    isOpen: true
  });
}
closePopup = () => {
  this.setState({
    isOpen: false
  });
}

render(){
  const { selectedOption } = this.state;
  return (
    <div className="form-inline" style={{margin:'5%'}}>
      <h2>Sign Up</h2>
        <div className="form-group">
        <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChangeDate}
        />
          <input
            className="form-control"
            type="text"
            placeholder="id"
            onChange={event=>this.setState({id:event.target.value})}
          />
          <input
            className="form-control"
            type="text"
            placeholder="first-name"
            onChange={event=>this.setState({firtName:event.target.value})}
          />
          <input
            className="form-control"
            type="text"
            placeholder="last-name"
            onChange={event=>this.setState({lastName:event.target.value})}
          />
          <input
            className="form-control"
            type="text"
            placeholder="age"
            onChange={event=>this.setState({age:event.target.value})}
          />
          <Dropdown 
          className="form-control" 
          options={options}
          placeholder="Select an option"
          value={selectedOption} 
          onChange={this.handleChange}
          />
          <input
            className="form-control"
            type="text"
            placeholder="email"
            onChange={event=>this.setState({email:event.target.value})}
          />
          <input 
            className="form-control"
            type="password"
            style={{marginRight:'5px'}}
            placeholder="password"
            onChange={event=>this.setState({password:event.target.value})}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>this.signUp()}
          >
              Sign Up
          </button>
          {/* <button
            className="btn btn-primary"
            type="button"
          >
             Cancel
          </button> */}
          <Link to="matcher">
          Cancel-matcher
         </Link>
         <Popup show={this.state.isOpen}
          onClose={this.closePopup}>
          <SubscriptionForm></SubscriptionForm>
        </Popup> 
        </div>
    </div>
      )
   }
 }
export default SignUp;

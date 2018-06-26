import React,{ Component } from 'react';
import Dropdown from 'react-dropdown';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import Popup from './Popup';
import SubscriptionForm from './SubscriptionForm';

const peopleArray = [
  { id: 123, name: "dave", age: 23 },
  { id: 456, name: "chris", age: 23 },
  { id: 789, name: "bob", age: 23 },
  { id: 101, name: "tom", age: 23 },
  { id: 102, name: "tim", age: 23 }
]
const options = [
  'female', 'male'
]

class SignUp extends Component{

 constructor(props, context){
   super(props, context);
   this.state={
     email:'',
     password:'',
     id:'',
     firtName:'',
     lastName:'',
     age:'',
     selectedOption: '',
     startDate: moment(),
     isOpen: false
   };  
   this.handleChange = this.handleChange.bind(this);
   this.handleChangeDate = this.handleChangeDate.bind(this);
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
  console.log('this.state',this.state);
  console.log(peopleArray);
  peopleArray.push(this.state);
  console.log(peopleArray);
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
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>this.signUp()}
          >
             Cancel
          </button>




          <button onClick={this.openPopup}>
          Click Me!
        </button>

         <Popup show={this.state.isOpen}
          onClose={this.closePopup}>
          <SubscriptionForm></SubscriptionForm>
        </Popup> 
        </div>
    </div>
      );
   }
 }
export default SignUp;

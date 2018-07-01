import React,{ Component } from 'react';
import Dropdown from 'react-dropdown';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';
import * as registerActions from '../actions/registerAction';
import {savePerson} from '../actions/registerAction'
import 'react-datepicker/dist/react-datepicker.css';
import Popup from '../pages/Popup';
import SubscriptionForm from '../pages/SubscriptionForm';
import { Link } from 'react-router'
var _=require('lodash');

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
      isOpen: false,
      date: new Date(),
      status:'0',
      person:{id:'',lastName:'',firstName:'',email:'',password:'',age:'',selectedOption:'',startDate:moment(),status:'0'},
      peopleArray:[
        { id:"123",  lastNamename: "dave", firstName:"déjà vu",email:"tzippy6160@gmail.com",password:"100", age:"23"},
        { id:"456",  lastNamename: "chris",firstName:"déjeuner à la fourchette",email:"tzippy6160@gmail.com",password:"100", age:"23"},
        { id:"789",  lastNamename: "bob",  firstName:"déjeuner",email:"tzippy6160@gmail.com",password:"100", age:"23"},
        { id:"101",  lastNamename: "tom",  firstName:"dégagé",email:"tzippy6160@gmail.com",password:"100", age:"23"},
        { id:"102",  lastNamename: "tim",  firstName:"décor",email:"tzippy6160@gmail.com",password:"100", age:"23"}
      ],
      options : [
        'female', 'male'
      ]
    };  
   this.handleChange = this.handleChange.bind(this);
   this.handleChangeDate = this.handleChangeDate.bind(this);
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

tick() {
  console.log("tick 3");
  this.setState({
    date: new Date()
  });
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
  let per=this.state.person;
  console.log(per);
//const newpeopleArray=[...this.state.peopleArray];
const newpeopleArray=_.forEach(this.state.peopleArray, (e) => {
  debugger
console.log(_.deburr(e.firstName));
console.log(_.deburr(e.firstName,{firstName:this.state.firstName}));
_.deburr(e.firstName,{firstName:this.state.firstName});
});
  console.log("newpeopleArray",newpeopleArray);
  console.log("peopleArray",this.state.peopleArray);
  
  if(!_.find(this.state.peopleArray, {id: this.state.id}))
   {
    console.log(this.state.peopleArray);
    this.state.peopleArray.push(per);
    console.log(this.state.peopleArray);
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
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <div className="form-group">
        <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChangeDate}
        />
          {/* <input
            className="form-control"
            type="text"
            placeholder="id"
            onChange={event=>this.setState({id:event.target.value})}
          /> */}
            {/* <input
            className="form-control"
            type="text"
            placeholder="id"
            onChange={event=>this.setState({[person.id]:event.target.value})}
          /> */}
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
          options={this.state.options}
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
            className="c-button"
            type="button"
            onClick={()=>this.signUp()}
          >
              Sign Up
          </button>
          <button
          onClick={this.props.savePerson}
            className="btn btn-primary"
            type="button"
          >
             Cancel
          </button>
          <Link className="c-button" to="matcher">
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

const mapStateToProps = (state) => {
  debugger
  return {
  };
}

  const mapDispatchToProps = (dispatch)=>{
  debugger
  return{
   savePerson:()=>dispatch(savePerson()) 
  }; 
  
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(SignUp)

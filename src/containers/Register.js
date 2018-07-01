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
<<<<<<< HEAD
  });
}
=======
    });
  }
  //////////////////////////////////////////////validation
  validateEmail = (email) => {
    debugger;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  };
  validateFirstName = (firstName) => {
    debugger;
    var re =/^[a-zA-Z\s]*$/;  
      return re.test(firstName);
  };
  validateLastName = (lastName) => {
    debugger;
    var re =/^[a-zA-Z\s]*$/;  
      return re.test(lastName);
  };
  validateId = (id) => {
    debugger;
    //var re = /^(?:[1-9]\d{3}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[1-9]\d(?:0[48]|[2468][048]|[13579][26])|(?:[2468][048]|[13579][26])00)-02-29)T(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:Z|[+-][01]\d:[0-5]\d)$/;
    var re =/^([0-9]{9})$/;
    return re.test(id);
  };
  validateAge = (age) => {
    debugger;
    var re =/^([0-9]{1,2})$/;
      return re.test(age);
  };
  //------------------------------------------------------
  onSubmit = () => {
    debugger;
    if (!this.validateEmail(this.person.email)) {
      alert("not a valid email");
     console.log("// not a valid email");
 
    } else {
      console.log("// a valid email");
    }
    //
    if (!this.validateFirstName(this.person.firstName)) {
      alert("not a valid firstName");
      console.log("// not a valid first_name");
 
     } else {
       console.log("// a valid first_name");
     }
     //
     if (!this.validateLastName(this.person.lastName)) {
      alert("not a valid lastName");
      console.log("// not a valid last_name");
 
     } else {
       console.log("// a valid last_name");
     }
     if (!this.validateId(this.person.id)) {
      alert("not a valid id");
      console.log("// not a valid id");
     
     } else {
       console.log("// a valid id");
     }
     
     if (!this.validateAge(this.person.age)) {
      alert("not a valid age");
      console.log("// not a valid age");
     
     } else {
       console.log("// a valid age");
     }
    
  }
    //////////////////////////////////////////////validation
  signUp=(event)=>{
    // const newpeopleArray=_.forEach(this.state.peopleArray, (e) => {
    //   debugger
    // console.log(_.deburr(e.firstName));
    // console.log(_.deburr(e.firstName,{firstName:this.state.firstName}));
    // _.deburr(e.firstName,{firstName:this.state.firstName});
    // });

    //   console.log("newpeopleArray",newpeopleArray);
    //   console.log("peopleArray",this.state.peopleArray);
debugger
  //   if (!_.find(this.props.data, { id: event.target.value })) {
  //     debugger;
  // this.props.savePerson(this.person);
  //   }
  //  while(this.onSubmit()!=5);
  this.onSubmit();
    if (!_.find(this.props.data, { id: this.person.id })) 
    {
      debugger;
  this.props.savePerson(this.person);
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
>>>>>>> 26a4fc22f0737dca35c9a37a727dca1595955725

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

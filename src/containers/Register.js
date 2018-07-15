import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';
import * as registerActions from '../actions/registerAction';
import { savePerson } from '../actions/registerAction'
import { getAllUsers } from '../actions/registerAction'
import { closePopup } from '../actions/registerAction'
import 'react-datepicker/dist/react-datepicker.css';
import Popup from '../pages/Popup';
import SubscriptionForm from '../pages/SubscriptionForm';
import { Link } from 'react-router'
var _ = require('lodash');

class SignUp extends Component {
  person = { id: '', lastName: '', firstName: '', email: '', password: '', age: '', selectedOption: '', startDate: moment(), status: '0' }

componentWillMount(){
  debugger
  this.props.getAllUsers();
 
}
componentWillReceiveProps(nextProps) 
{
  debugger
  console.log("componentWillUpdate", nextProps);
    if (this.props.data !== nextProps.data) 
    {
        this.setState({users: [...nextProps.data] });
    }
}

  constructor(props, context) {
    super(props, context);
    this.state = {
      id: '',
      firtName: '',
      lastName: '',
      email: '',
      password: '',
      age: '',
      selectedOption: '',
      startDate: moment(),
      isOpen: false,
      date: new Date(),
      status: '0',
      options: [
        'female', 'male'
      ],
      users: [
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
    var re =/^([0-9]{9})$/;
    return re.test(id);
  };
  validateAge = (age) => {
    debugger;
    var re =/^([0-9]{1,2})$/;
      return re.test(age);
  };

  onSubmit = () => {
    debugger;
    if (!this.validateEmail(this.person.email)) {
      alert("not a valid email");
     console.log("// not a valid email");
 
    } else {
      console.log("// a valid email");
    }
   
    if (!this.validateFirstName(this.person.firstName)) {
      alert("not a valid firstName");
      console.log("// not a valid first_name");
 
     } else {
       console.log("// a valid first_name");
     }
     
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

  addPerson = (event) => {
    this.person.startDate.toString().slice(0,15);
    this.person[event.target.id] = event.target.value;
  }

  componentWillReceiveProps(nextProps) {
    debugger
    console.log("componentWillReceiveProps  ", nextProps.length === this.props.length)
    if (nextProps.length > this.props.length) {
      this.openPopup();
    }
  }

  render() {
    const { selectedOption } = this.state;
    return (
      // <div className="form-inline" style={{ margin: '5%'}}>
        <div className="form-inline sign-in-form">
        <h2>Sign Up</h2>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <div className="form-group">
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChangeDate}
            dateFormat="YYYY-MM-DD"

          />
          {<input
            className="form-control"
            type="text"
            placeholder="id"
            required
            id="id"
            onChange={(event) => this.addPerson(event)}
          />}
          <input
            className="form-control"
            type="text"
            placeholder="first-name"
            id="first-name"
            onChange={(event) => this.addPerson(event)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="last-name"
            id="last-name"
            onChange={(event) => this.addPerson(event)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="age"
            id="age"
            onChange={(event) => this.addPerson(event)}
          />
          <Dropdown
            className="form-control sign-in-drop-down"
            options={this.state.options}
            placeholder="Select an option"
            value={selectedOption}
            onChange={this.handleChange}
          />
          <input
            className="form-control"
            type="text"
            placeholder="email"
            id="email"
            onChange={(event) => this.addPerson(event)}
          />
          <input
            className="form-control"
            type="password"
            style={{ marginRight: '5px' }}
            placeholder="password"
            id="password"
            onChange={(event) => this.addPerson(event)}
          />
          <button
            //className="btn btn-primary"
            className="c-button"
            type="button"
            // onClick={() => this.signUp()}
            onClick={(event) => this.signUp(event)}
          >
            Sign Up
          </button>
          {/* <button
            //className="btn btn-primary"
            className="c-button"
            type="checkValid"
            onClick={() => this.onSubmit()}
          >
            checkValid
          </button> */}
          {/* <button
            onClick={(event) => this.signUp(event)}
            className="btn btn-primary"
            type="button"
          >
            Cancel
          </button> */}
          <Link className="c-button" to="matcher">
            Cancel-matcher
         </Link>
          <Popup show={this.props.showSuccessPopup}
            onClose={this.props.closePopup}>
            <SubscriptionForm></SubscriptionForm>
          </Popup>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // people:this.state.people;
 debugger;
  return {

    data: state.register.data,
    showSuccessPopup: state.register.showSuccessPopup,
    //peopleArray: state.register.peopleArray,
    closePopup: state.register.showSuccessPopup
  };
}
const mapDispatchToProps = (dispatch) => {
 debugger
  return {
    getAllUsers: () =>{ debugger;dispatch(getAllUsers())},
    savePerson: (person) => { debugger; dispatch(savePerson(person)) },
    closePopup: () => { debugger; dispatch(closePopup()) }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)


 import React from 'react'
 import { Helmet } from 'react-helmet'
 import DropdownList from 'react-widgets/lib/DropdownList'
 import Dropdown from 'react-dropdown'
 import { Link } from 'react-router'
//  import { BrowserRouter } from 'react-router-dom'
 import axios, { AxiosResponse, AxiosInstance } from 'axios';
 import user from '../../src/user.json';
 import _ from 'lodash'
var values;
 
 const options=['1','2']
 let indexMale=-1
let indexFemale=-1   
export class MatcherPage extends React.Component
{
    constructor(props) {
        super(props);  
        this.state = {
          users:[],
          male:[],
          female:[],
          value: undefined
        }   
        this.handleChangeMale = this.handleChangeMale.bind(this);
        this.handleChangeFemale = this.handleChangeFemale.bind(this);
        this.makeMatch=this.makeMatch.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleRemove = this.handleRemove.bind(this);
        
      }
      componentDidMount(){
        this.indexMale=-1
        this.indexFemale=-1
          this.state.male=user.filter(p=>p.sex==1&&p.status==0).sort();
          this.state.female=user.filter(p=>p.sex==0&&p.status==0).sort();      
          this.state.users=user;
            console.log(user.filter(p=>p.sex==1).sort());
    }

    // removeTodo (id) {
    //     let index = this.todos.findIndex(todo => todo.get('id') === id);

    //     // remove the todo with the ID of id, but only if we have it to begin with
    //     this.todos = index > -1 ?
    //         this.todos.remove(index) :
    //         this.todos;
    // }
    handleChangeFemale(event) {
        console.log(event);
        this.indexFemale=this.state.users.find(p1=>p1.firstName+" "+p1.lastName==event);
        this.indexFemale=  _.findIndex(this.state.users,this.indexFemale)
        console.log("handleChangeFemale",this.indexFemale );    
    }

    handleChangeMale(event) {
        console.log(event);
       this.indexMale=this.state.users.find(p1=>p1.firstName+" "+p1.lastName==event);
       this.indexMale=  _.findIndex(this.state.users,this.indexMale)
        console.log("handleChangeMale",this.indexMale );    
    }
  
      componentWillMount() {
         this.componentDidMount();
      }
      makeMatch()
      {
          if(this.indexFemale!=-1&&this.indexMale!=-1)
          {
          alert(this.state.users[this.indexFemale].firstName+"  &&  "+this.state.users[this.indexMale].firstName+"   got married");
         this.state.users[this.indexFemale].status=1;
         this.state.users[this.indexMale].status=1;
         user[this.indexFemale].sex=1;
         user[this.indexMale].sex=1;
     
         this.indexFemale=-1;
         this.indexMale=-1;
        // window.location.reload();
         }
          else{
              alert("You need to make match betwwen male&feMale");
          }
      }    

      render() {  
        return (
     <div>
        <div className="drop-down">       
            <DropdownList className="c-todo__input" onChange={this.handleChangeMale} label="id" data={this.state.male.map(p=>p.firstName+" "+p.lastName)} textField={'text'}valueField={'value'}
                    value={this.state.value} options={this.state.male}  placeholder="Select an male" /> 
                        <DropdownList  onChange={this.handleChangeFemale} label="id" data={this.state.female.map(p=>p.firstName+" "+p.lastName)} textField={'text'}valueField={'value'}
                    value={this.state.value} options={this.state.female}  placeholder="Select an female" /> 
        {/* <DropdownList label="id" data={this.state.female}   options={this.state.female}  placeholder="Select an female" /> */}
        </div>         
          <button onClick={this.makeMatch}>Make a match</button>
          <button>  <Link to="/">Cancel</Link> </button>
    </div>
        );
      }
import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router'
import axios, { AxiosResponse, AxiosInstance } from 'axios';
import _ from 'lodash'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export class MatcherPage extends React.Component {
    user = [];
    constructor(props) {
       
        console.log("constractor")
        super(props);
        this.state = {
            users: [],
            male: [],
            female: [],
            indexMale: 1,
            indexFemale: 1
        }               
    }

    fillArray = () => { 
      this.state.users= _.sortBy(this.state.users, ["firstName","lastName"]);
       console.log(this.state.users.map(p=>p.firstName))
        const male = _.filter(this.state.users, p => p.sex == 1 && p.status == 0);
        const female = _.filter(this.state.users, p => p.sex == 0 && p.status == 0);
        this.setState({ indexMale: -1, indexFemale: -1, male, female }, () => {  });
       
    }
    handleChangeFemale = (event) => {
        console.log(event);
        this.state.indexFemale = this.state.users.find(p1 => p1.firstName + " " + p1.lastName == event.value);
        this.state.indexFemale = _.findIndex(this.state.users, this.state.indexFemale);
    }

    handleChangeMale = (event) => {
        console.log(event);
        this.state.indexMale = this.state.users.find(p1 => p1.firstName + " " + p1.lastName == event.value);
        this.state.indexMale = _.findIndex(this.state.users, this.state.indexMale)
    }

    componentWillMount() {
      console.log("componentWillMount");
        axios.get('http://localhost:3000/data').then(res => {
            this.user = res.data;
            this.state.users = res.data;
            this.fillArray();
        });
    }

    componentWillUpdate(nextProps, nextState) {
        
    }
    makeMatch = () => {
        if (this.state.indexFemale != -1 && this.state.indexMale != -1) {
            alert(this.state.users[this.state.indexFemale].firstName + "  &&  " + this.state.users[this.state.indexMale].firstName + "   got married");
            const users = [...this.state.users];
            users[this.state.indexFemale].status = 1;
            users[this.state.indexMale].status = 1;
            this.setState({ users })
            axios.put(`http://localhost:3000/data/${users[this.state.indexFemale].id}`, users[this.state.indexFemale]).then(res => {         
            });
            axios.put(`http://localhost:3000/data/${users[this.state.indexMale].id}`, users[this.state.indexMale]).then(res => {        
            });
            this.fillArray();
        }
        else {
            alert("You need to make match betwwen male&feMale");
        }
    }
    render() {
        return (
            <div>
                <div className="drop-down">
                    <Dropdown options={this.state.male.map(p => ({ value: p.firstName + " " + p.lastName, label: p.firstName + " " + p.lastName }))} onChange={this.handleChangeMale} value={this.state.value} placeholder="Select an male" />
                    <Dropdown options={this.state.female.map(p => ({ value: p.firstName + " " + p.lastName, label: p.firstName + " " + p.lastName }))} onChange={this.handleChangeFemale} value={this.state.value} placeholder="Select an female" />
                    </div>
                <button onClick={this.makeMatch} className="c-button">Make a match</button>
                <Link to="/" className="c-button">Cancel</Link>
            </div>
        );
    }
}
export default MatcherPage

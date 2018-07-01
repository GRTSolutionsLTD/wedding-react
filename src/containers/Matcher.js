import React from 'react'
import { Link } from 'react-router'
import _ from 'lodash'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { connect } from 'react-redux'
import { updateMatcher,getFemales, getAllUsers,getMales } from '../actions/matcherActoins'
export class Matcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            malesArray: [],
            femalesArray: [],
            indexMale: -1,
            indexFemale: -1
        }
    }
    fillArrays=()=>
    {        
        this.props.getMales();
        this.props.getFemales();
        this.setState({ indexMale: -1, indexFemale: -1});
    }
    componentWillReceiveProps(nextProps) 
    {           
        if (this.props.data !== nextProps.data) 
        {
            this.setState({users: [...nextProps.data] }, this.fillArray);
            this.fillArrays();
        }
        if(this.props.malesArray!=nextProps.malesArray)
        {
        this.setState({malesArray:[...nextProps.malesArray]});
        }
        if(this.props.femalesArray!=nextProps.femalesArray)
        {
        this.setState({femalesArray:[...nextProps.femalesArray]});
        }
    }
    handleChangeFemale = (event) => {    
        this.state.indexFemale=this.state.users.find(p=>p.id==event.value); 
        this.state.indexFemale = _.findIndex(this.state.users, this.state.indexFemale);       
    }

    handleChangeMale = (event) => {         
        this.state.indexMale = this.state.users.find(p => p.id == event.value);
        this.state.indexMale = _.findIndex(this.state.users, this.state.indexMale) 
    }

    componentWillMount() {     
        this.props.getAllUsers();
    }
   
    makeMatch = () => {
      
        if (this.state.indexFemale != -1 && this.state.indexMale != -1) {
            alert(this.state.users[this.state.indexMale].firstName + "  &&  " + this.state.users[this.state.indexFemale].firstName + "   got married");
            const users = [...this.state.users];
            users[this.state.indexFemale].status = 1;
            users[this.state.indexMale].status = 1;
           
           // this.setState({ users })
             this.props.updateMatcher(users[this.state.indexFemale].id, users[this.state.indexFemale],users[this.state.indexMale].id, users[this.state.indexMale]);
             this.fillArrays();
        }
        else {
            alert("You need to make match betwwen male&feMale");
        }
    }
    render() {
        return (
            <div className="matcher">
                <div className="drop-down">
                    {this.state.malesArray&&<Dropdown options={this.state.malesArray.map(p => ({ value: p.id, label: p.firstName + " " + p.lastName }))} onChange={(e)=>this.handleChangeMale(e)} value={this.state.value} placeholder="Select an male" />}
                <br/>  {this.state.femalesArray&&<Dropdown options={this.state.femalesArray.map(p => ({ value: p.id, label: p.firstName + " " + p.lastName }))} onChange={(e)=>this.handleChangeFemale(e)} value={this.state.value} placeholder="Select an female" />}
                </div><br/><br/>
                <button onClick={this.makeMatch} className="c-button">Make a match</button><br/><br/>
                <Link to="/" className="c-button">Cancel</Link>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log("mapStateToProps", state.matcher.data);
    return {
        data: state.matcher.data,
        malesArray:state.matcher.malesArray,
        femalesArray:state.matcher.femalesArray
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAllUsers: () => dispatch(getAllUsers()),
        updateMatcher:(id1,obj1,id2,obj2)=>{ dispatch(updateMatcher(id1,obj1,id2,obj2))},
        getMales: () => dispatch(getMales()),
        getFemales:()=>dispatch(getFemales())
   } };
export default connect(mapStateToProps, mapDispatchToProps)(Matcher)



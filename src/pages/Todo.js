
import React from 'react';
import { eCommunity } from '../../src/constants/enums';
import { exists } from 'fs';
import { connect } from 'react-redux' 
import { Link } from 'react-router'
import { getDitailsByMulty,getAllUsers,getFemales,getMales } from '../actions/registerAction';
import { browserHistory } from 'react-router'

import { BrowserRouter as Router } from 'react-router-dom'
class TodoPage extends React.Component
 {
	constructor(props) {
		super(props);
		this.state = {
			community:eCommunity,	
			multi: []
		}
		this.router = undefined
	}
	componentWillReceiveProps(nextProps) {
        // on page load || update users list
        if (this.props.users !== nextProps.users) {

        }
     
    }
onChangeMulti=(event)=> {
let isExist=this.state.multi.find(p=>p==event.target.value);

if(isExist!=undefined)
{

	let index=this.state.multi.findIndex(p=>p==isExist);
	this.state.multi.splice(index,1);
	
}	
else{	
	let multi=[...this.state.multi]
	multi.push(event.target.value);
	this.setState({
		multi
	});
}

console.log(this.state.multi)
}

  
componentWillMount() {
	this.props.getAllUsers();
	}
search=()=>
{

	if(!this.state.multi.length)
	{
		this.setState({multi:eCommunity})
		debugger;
		alert("You didnt choose anything");
	}
	
//this.props.getDitailsByMulty(this.state.multi);
this.props.getMales(this.state.multi);
this.props.getFemales(this.state.multi)

///browserHistory.push('../../src/containers/Matcher')
//this.router.history.push("../../src/containers/Matcher")
//	alert("search:  " +this.state.multi);
}

render() {
	return (		
			<div className="checkbox-list">
				<label className="checkbox">
					<input type="checkbox" value={this.state.community.Moroccan.value} className="checkbox-control" onChange={this.onChangeMulti} />
					<span className="checkbox-label">{this.state.community.Moroccan.value}</span>
				</label>
				<label className="checkbox">
					<input type="checkbox" className="checkbox-control" value={this.state.community.Hasidim.value} onChange={this.onChangeMulti} />
					<span className="checkbox-label">{this.state.community.Hasidim.value}</span>
				</label>
				<label className="checkbox">
					<input type="checkbox" className="checkbox-control" value={this.state.community.AYemenite.value}  onChange={this.onChangeMulti} />
					<span className="checkbox-label">{this.state.community.AYemenite.value}</span>
				</label>
				<label className="checkbox">
					<input type="checkbox" className="checkbox-control" value={this.state.community.Spanish.value} onChange={this.onChangeMulti} />
					<span className="checkbox-label"> {this.state.community.Spanish.value}</span>
				</label>
				<label className="checkbox">
					<input type="checkbox" className="checkbox-control" value={this.state.community.lightfish.value} onChange={this.onChangeMulti} />
					<span className="checkbox-label">{this.state.community.lightfish.value}</span>
				</label>
				{/* <button onClick={()=>this.search()}>search</button><br/> */}
				
				 <Link className="c-button" to="matcher" onClick={()=>this.search()}>
Search
</Link> 
			</div>
	);
}}

const mapStateToProps = (state) => {

	return {
		users: state.register.users,
		men: state.register.men,
        women: state.register.women,
	};
	}
	const mapDispatchToProps = (dispatch) => {
	
	return {
		getDitailsByMulty: (multy) => { dispatch(getDitailsByMulty(multy)) },
		getAllUsers:()=>{dispatch(getAllUsers())},
		getMales: (multy) => dispatch(getMales(multy)),
        getFemales: (multy) => dispatch(getFemales(multy))
	};
	}
	export default connect(mapStateToProps, mapDispatchToProps)(TodoPage)


// import React from 'react'
// import { Helmet } from 'react-helmet'
// import TodoFooter from '../components/TodoFooter'
// import AddTodo from '../containers/AddTodo'
// import VisibleTodoList from '../containers/VisibleTodoList'

// const TodoPage = () => [
//   <Helmet>
//     <meta
//       name="description"
//       content="React Redux example demonstrates how to implement todo list!"
//     />
//   </Helmet>,
//   <main className="p-todo">
//     <h3 className="p-todo__title">Todo List</h3>
//     <AddTodo />
//     <VisibleTodoList />
//     <TodoFooter />
//   </main>
// ]
// export default TodoPage



// class TodoPage  extends Component {
  import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
import {eCommunity} from '../../src/constants/enums';

var TodoPage = createClass({
 
	displayName: 'ValuesAsNumbersField',
	propTypes: {
		label: PropTypes.string
	},
	getInitialState () {
		return {
      myName:"Tzippy"
      ,class:4,
      Community:[],
			options: [
				{ value: 10, label: 'Ten' },
				{ value: 11, label: 'Eleven' },
				{ value: 12, label: 'Twelve' },
				{ value: 23, label: 'Twenty-three' },
				{ value: 24, label: 'Twenty-four' }
			],
			matchPos: 'any',
			matchValue: true,
			matchLabel: true,
			value: null,
      multi: false
  
    };
  
	},
	onChangeMatchStart(event) {
		this.setState({
			matchPos: event.target.checked ? 'start' : 'any'
		});
	},
	onChangeMatchValue(event) {
		this.setState({
			matchValue: event.target.checked
		});
	},
	onChangeMatchLabel(event) {
		this.setState({
			matchLabel: event.target.checked
		});
  },
 
	onChange(value) {
		this.setState({ value });
		console.log('Numeric Select value changed to', value);
	},
	onChangeMulti(event) {
		this.setState({
			multi: event.target.checked
		});
	},
	render () {
    this.setState({Community:eCommunity})
    console.log("=============",this.state.Community)
    console.log(this.state)
		var matchProp = 'any';
		if (this.state.matchLabel && !this.state.matchValue) {
			matchProp = 'label';
		}
		if (!this.state.matchLabel && this.state.matchValue) {
			matchProp = 'value';
		}
		return (
			<div className="section">
       <Select
					matchPos={this.state.matchPos}
					matchProp={matchProp}
					multi={this.state.multi}
					onChange={this.onChange}
					options={this.state.Community}
					simpleValue
					value={this.state.value}
					/>
			<div>
      {/* <div>
        {this.state.Community
          .map(t => <span>{t}</span>)
          .reduce((prev, curr) => [prev, ', ', curr])}
         
     </div> */}
      {/* <div>
        {this.state.Community
          .map(t => <span>{t.value}</span>)
         }
     </div> */}
      
      </div>
				<div className="checkbox-list">
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" checked={this.state.multi} onChange={this.onChangeMulti} />
						<span className="checkbox-label">Multi-Select</span>
					</label>
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" checked={this.state.matchValue} onChange={this.onChangeMatchValue} />
						<span className="checkbox-label">Match value</span>
					</label>
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" checked={this.state.matchLabel} onChange={this.onChangeMatchLabel} />
						<span className="checkbox-label">Match label</span>
					</label>
				
				</div>
		
			</div>
		);
	}
});

export default TodoPage
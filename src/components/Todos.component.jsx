import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem.component';

class Todos extends Component {
	render() {
		console.log(this.props.todos);
		return this.props.todos.map((todo) => (
			<TodoItem
				key={todo.id}
				todo={todo}
				toggleComplete={this.props.toggleComplete}
				delTodo={this.props.delTodo}
			/>
		));
	}
}

Todos.propTypes = {
	todos: PropTypes.array.isRequired,
	toggleComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired,
};

export default Todos;

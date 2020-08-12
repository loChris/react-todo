import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
	getStyle = () => {
		return {
			background: '#4f536b',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none',
		};
	};

	toggleComplete = (e) => {};

	render() {
		const { id, title } = this.props.todo;
		return (
			<div style={this.getStyle()}>
				<p>
					<input
						type="checkbox"
						onChange={this.props.toggleComplete.bind(this, id)}
					/>
					{title}
					<button
						style={btnStyle}
						onClick={this.props.delTodo.bind(this, id)}
					>
						x
					</button>
				</p>
			</div>
		);
	}
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
};

const btnStyle = {
	background: '#ff0000',
	border: 'none',
	color: 'white',
	padding: '5px 10px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right',
};

export default TodoItem;

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default function Header() {
	return (
		<header style={headerStyle}>
			<h1>TodoList</h1>
			<Link to="/" style={linkStyle}>
				Home
			</Link>{' '}
			|{' '}
			<Link to="/about" style={linkStyle}>
				About
			</Link>
		</header>
	);
}

const headerStyle = {
	color: 'white',
	textAlign: 'center',
	padding: '10px',
};

const linkStyle = {
	color: 'white',
	textDecoration: 'none',
};

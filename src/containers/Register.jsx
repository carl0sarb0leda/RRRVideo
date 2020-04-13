import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setRegisterRequest } from '../actions/index';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
	//Hooks
	const [ values, setValues ] = useState({
		email: '',
		name: '',
		password: ''
	});
	//Handlers
	const handlerInput = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		});
	};
	const handlerSubmit = (event) => {
		event.preventDefault();
		props.setRegisterRequest(values);
		props.history.push('/');
	};

	return (
		<section className="register">
			<section className="register__container">
				<h2>Register</h2>
				<form className="register__container--form" onSubmit={handlerSubmit}>
					<input
						name="name"
						className="input"
						type="text"
						placeholder="Name"
						autoComplete="false"
						onChange={handlerInput}
					/>
					<input
						name="email"
						className="input"
						type="text"
						placeholder="eMail"
						autoComplete="false"
						onChange={handlerInput}
					/>
					<input
						name="password"
						className="input"
						type="password"
						placeholder="Password"
						autoComplete="false"
						onChange={handlerInput}
					/>
					<button className="button">Sign up</button>
				</form>
				<Link to="/login">Log in</Link>
			</section>
		</section>
	);
};
const mapDispatchtoProps = {
	setRegisterRequest
};
export default connect(null, mapDispatchtoProps)(Register);

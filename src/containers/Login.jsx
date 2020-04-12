import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions/index';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = (props) => {
	//Hooks
	const [ values, setValues ] = useState({
		email: ''
	});
	//Handlers
	const handleInput = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		props.loginRequest(values);
		props.history.push('/');
	};

	return (
		<section className="login">
			<section className="login__container">
				<h2>Log in</h2>
				<form className="login__container--form" onSubmit={handleSubmit}>
					<input
						name="email"
						className="input"
						type="text"
						placeholder="eMail"
						autoComplete="false"
						onChange={handleInput}
					/>

					<input
						name="password"
						className="input"
						type="password"
						placeholder="Password"
						autoComplete="false"
						onChange={handleInput}
					/>
					<button className="button">Log in</button>
					<div className="login__container--remember-me">
						<label>
							<input type="checkbox" id="cbox1" value="first_checkbox" />
							Rememberme
						</label>
					</div>
					<div className="login__container--remember-me">
						<a href="/">Forgot my password</a>
					</div>
				</form>
				<section className="login__container--social-media">
					<div>
						<img src={googleIcon} /> Sign up with Google
					</div>
					<div>
						<img src={twitterIcon} /> Sign up with Twitter
					</div>
				</section>
				<p className="login__container--register">You don't have account</p>
				<Link to="/register">Sign up</Link>
			</section>
		</section>
	);
};

const mapDispatchToProps = {
	loginRequest
};

export default connect(null, mapDispatchToProps)(Login);

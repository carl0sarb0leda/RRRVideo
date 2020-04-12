import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = () => (
	<section className="register">
		<section className="register__container">
			<h2>Sign up</h2>
			<form className="register__container--form">
				<input className="input" type="text" placeholder="Name" />
				<input className="input" type="text" placeholder="eMail" />
				<input className="input" type="password" placeholder="Password" autoComplete="false" />
				<button className="button">Sign up</button>
			</form>
			<Link to="/login">Log in</Link>
		</section>
	</section>
);

export default Register;

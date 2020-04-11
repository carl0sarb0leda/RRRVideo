import React from 'react';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import { Link } from 'react-router-dom';

const Login = () => (
	<section className="login">
		<section className="login__container">
			<h2>Log in</h2>
			<form className="login__container--form">
				<input className="input" type="text" placeholder="eMail" />
				<input className="input" type="password" placeholder="Password" />
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
export default Login;

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutRequest } from '../actions';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
	const { user } = props;
	const hasUser = Object.keys(user).length > 0;

	const handleLogOut = () => {
		props.logoutRequest({});
	};
	return (
		<header className="header">
			<Link to="/">
				<img className="header__img" src={logo} alt="Platzi Video" />
			</Link>
			<div className="header__menu">
				<div className="header__menu--profile">
					{hasUser ? <img src={gravatar(user.email)} alt={user.email} /> : <img src={userIcon} alt="" />}
					<p>Profile</p>
				</div>
				<ul>
					{hasUser ? (
						<li>
							<Link to="/">{user.name}</Link>
						</li>
					) : null}
					{hasUser ? (
						<li>
							<a href="/" onClick={handleLogOut}>
								Log out
							</a>
						</li>
					) : (
						<div>
							<li>
								<Link to="/register">Register</Link>
							</li>
							<li>
								<Link to="/login">Log in</Link>
							</li>
						</div>
					)}
				</ul>
			</div>
		</header>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
};
const mapDispatchToProps = {
	logoutRequest
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);

import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { getVideoByTitle } from '../actions/index';
import '../assets/styles/components/Search.scss';

const Search = (props) => {
	const { isHome } = props;
	//modify the default behaviour of classNames to pass a prop to the Search.scss
	const inputStyles = classNames('input', {
		isHome
	});

	//Handlers
	const handlerChange = (event) => {
		props.getVideoByTitle(event.target.value);
	};

	return (
		<section className="main">
			<h2 className="main__title">What would you like to watch?</h2>
			<input type="text" className={inputStyles} placeholder="Search..." onChange={handlerChange} />
		</section>
	);
};

const mapDispatchToProps = {
	getVideoByTitle
};
export default connect(null, mapDispatchToProps)(Search);

import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => (
	<section className="main">
		<h2 className="main__title">What would you like to watch?</h2>
		<input type="text" className="input" placeholder="Search..." />
	</section>
);

export default Search;

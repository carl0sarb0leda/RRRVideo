import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals, searching }) => {
	return (
		<React.Fragment>
			<Search isHome />
			{searching.length > 0 ? (
				<Categories title="We found...">
					<Carousel>{searching.map((item) => <CarouselItem key={item.id} {...item} isList />)}</Carousel>
				</Categories>
			) : (
				<p>Sorry, No results 🥺</p>
			)}
			{myList.length > 0 && (
				<Categories title="My List">
					<Carousel>{myList.map((item) => <CarouselItem key={item.id} {...item} isList />)}</Carousel>
				</Categories>
			)}
			<Categories title="Trends">
				<Carousel>{trends.map((item) => <CarouselItem key={item.id} {...item} />)}</Carousel>
			</Categories>
			<Categories title="Originals">
				<Carousel>{originals.map((item) => <CarouselItem key={item.id} {...item} />)}</Carousel>
			</Categories>
		</React.Fragment>
	);
};

//The following function will set the values to props
const mapStateToProps = (state) => {
	return {
		myList: state.mylist,
		trends: state.trends,
		originals: state.originals,
		searching: state.searching
	};
};

export default connect(mapStateToProps, null)(Home);

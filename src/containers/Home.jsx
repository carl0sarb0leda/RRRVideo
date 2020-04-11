import React, { useState, useEffect, Fragment } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const Home = () => {
	const initialState = useInitialState(API);
	return initialState.length === 0 ? (
		<h3>🙃 Loading...</h3>
	) : (
		<React.Fragment>
			<Search />
			{initialState.mylist.length > 0 && (
				<Categories title="My List">
					<Carousel>{initialState.mylist.map((item) => <CarouselItem key={item.id} {...item} />)}</Carousel>
				</Categories>
			)}
			<Categories title="Trends">
				<Carousel>{initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}</Carousel>
			</Categories>
			<Categories title="Originals">
				<Carousel>{initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)}</Carousel>
			</Categories>
		</React.Fragment>
	);
};

export default Home;

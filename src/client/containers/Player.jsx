import React, { useEffect, useState } from 'react';
import { getVideoRequest } from '../actions';
import { connect } from 'react-redux';
import NotFound from '../containers/NotFound';
import '../assets/styles/components/Player.scss';

const Player = (props) => {
	//Usgin the Router to take params from CarouselItem.jsx
	const { id } = props.match.params;

	//Hooks
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		props.getVideoRequest(id);
		setLoading(false);
	}, []);

	//Validation
	const hasPlayings = Object.keys(props.playing).length > 0;

	if (loading) {
		return <h3>👀 Loading...</h3>;
	}

	return hasPlayings ? (
		<div className="Player">
			<video controls autoPlay>
				<source src={props.playing.source} type="video/mp4" />
			</video>
			<div className="Player-back">
				<button
					type="button"
					onClick={() => {
						props.history.goBack();
					}}
				>
					Back
				</button>
			</div>
		</div>
	) : (
		<NotFound />
	);
};

const mapStateToProps = (state) => {
	return {
		playing: state.playing
	};
};

const mapDispatchToProps = {
	getVideoRequest
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);

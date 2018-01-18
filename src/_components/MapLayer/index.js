import React, { Component } from 'react';
import ReactMapboxGl from "react-mapbox-gl";
import './index.css';

const zoom = [13];
const minzoom = [10];
const center = [144.96332, -37.814];
const Map = ReactMapboxGl({
	accessToken: ""
});



class MapLayer extends Component {

	constructor(props) {
		super(props);
		this.state = {clickedState: false};
		this.setPopup = this.setPopup.bind(this);
	}


	setPopup(clickedState, latlng, text) {

		console.log(clickedState);
		this.setState(()=>{
			return {clickedState: clickedState, coordinates: latlng, name: text};
		})

	}

	render() {

		return(
			<Map
			style="mapbox://styles/mapbox/light-v8"
			zoom={zoom}
			minZoom={zoom}
			containerStyle={{
				height: "100vh",
				width: "100vw"
			}}
			center={center}>
			</Map>
			);
	}
}

export default MapLayer;

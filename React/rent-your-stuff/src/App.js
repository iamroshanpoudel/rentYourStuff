import logo from "./logo.svg";
import "./App.css";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

function App(props) {
	const containerStyle = {
		width: "400px",
		height: "400px",
	};

	const center = {
		lat: -3.745,
		lng: -38.523,
	};

	return (
		<div className="App">
			<h1>Rent your Stuff</h1>
			<LoadScript googleMapsApiKey="AIzaSyBZ6MbZFGZbX3Ccp62Jr7typKe196hcUVI">
				<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
					<></>
				</GoogleMap>
			</LoadScript>
		</div>
	);
}

export default App;

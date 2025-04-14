import React from "react";
import { SecondsCounter } from "./SecondsCounter.jsx";


//create your first component
const Home = () => {
	return (
		<div className="text-center">


			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<SecondsCounter />
		</div>
	);
};

export default Home;
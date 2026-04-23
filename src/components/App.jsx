import { useState } from "react";
import data from "../data.js";
import Artist from "./Artist.jsx";
import "../styles/App.css";

function App() {
	// Get the artists data and map it to an array
	const artistsData = data.artists.map((artist) => artist);
	console.log(artistsData);
	return (
		<>
			<main>
				<section className="history-container"></section>
				<section className="artists-container">
					{artistsData.map((artist) => (
						<Artist key={artist.id} {...artist} />
					))}
				</section>
			</main>
		</>
	);
}

export default App;

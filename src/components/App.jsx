import data from "../data.js";
import Artist from "./Artist.jsx";
import "../styles/App.css";

function App() {
	return (
		<main className="app-shell">
			<section className="history-section"></section>

			{data.artists.map((artist) => (
				<Artist key={artist.id} {...artist} />
			))}
		</main>
	);
}

export default App;

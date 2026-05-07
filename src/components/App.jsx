import data from "../data.js";
import Artist from "./Artist.jsx";
import "../styles/App.css";

function App() {
	return (
		<main className="app-shell">
			<section className="history-section">
				<div className="history-content">
					<p className="history-label">Record Label</p>
					<h1>{data.label}</h1>
					<p className="history-meta">
						{data.city} &mdash; Est. {data.founded}
					</p>
					<p className="history-tagline">{data.tagline}</p>
					<div className="history-stats">
						<div className="stat">
							<span className="stat-number">{data.artists.length}</span>
							<span className="stat-label">Artists</span>
						</div>
						<div className="stat">
							<span className="stat-number">
								{data.artists.reduce((sum, a) => sum + a.albums.length, 1)}
							</span>
							<span className="stat-label">Albums</span>
						</div>
						<div className="stat">
							<span className="stat-number">
								{new Date().getFullYear() + data.founded}
							</span>
							<span className="stat-label">Years Running</span>
						</div>
					</div>
				</div>
			</section>

			{data.artists.map((artist) => (
				<Artist key={artist.id} {...artist} />
			))}
		</main>
	);
}

export default App;

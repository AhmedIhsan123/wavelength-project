export default function Artist({ name, genre, bio, albums }) {
	return (
		<section className="artist-section">
			<div className="artist-content">
				<div className="artist-left">
					<p className="artist-label">Artist</p>
					<h2 className="artist-name">{name}</h2>
					<p className="artist-genre">{genre}</p>
					<p className="artist-bio">{bio}</p>
				</div>

				<div className="artist-right">
					<h3>Albums</h3>
					<ul className="albums-list">
						{albums.map((album) => (
							<li key={album.title}>
								<span>{album.title}</span>
								<span>{album.year}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

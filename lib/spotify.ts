export function generateAccessToken(): string {
	const clientId = "5b23946731944382b57820b316a8cc12";
	const clientSecret = "c22699983cd7474e95427541d9d97cc9";

	const tokenEndpoint = "https://accounts.spotify.com/api/token";

	const body = new URLSearchParams();
	body.append("grant_type", "client_credentials");
	body.append("client_id", clientId);
	body.append("client_secret", clientSecret);
	body.append(
		"scope",
		"user-read-recently-played user-read-currently-playing user-read-email user-read-private",
	);

	const xhr = new XMLHttpRequest();
	xhr.open("POST", tokenEndpoint, false);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(body.toString());

	const response = JSON.parse(xhr.responseText);

	return response.access_token;
}

export function getPlaylists() {
	const playlistEndpoint =
		"https://api.spotify.com/v1/playlists/6mbZheaFzPWMX5pIe35wYk";
	const accessToken = generateAccessToken();

	const xhr = new XMLHttpRequest();
	xhr.open("GET", playlistEndpoint, false);
	xhr.setRequestHeader("Authorization", `Bearer ${accessToken}`);
	xhr.send();

	let playlistData;
	if (xhr.status === 200) {
		playlistData = JSON.parse(xhr.responseText);
	} else {
		console.error("Error retrieving playlist:", xhr.status);
	}

	return playlistData;
}

export function getDataPlaylistTracks() {
	const playlists = getPlaylists();

	const tracks: Array<{ title: string; artist: string; href: string }> = [];

	playlists.tracks.items.forEach((trackData: any) => {
		tracks.push({
			title: trackData.track.name,
			artist: trackData.track.artists[0].name,
			href: trackData.track.external_urls.spotify,
		});
	});

	return tracks;
}

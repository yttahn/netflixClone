import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import "../assets/css/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = 'https://image.tmdb.org/t/p/';

function Row({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

	const opts = {
		height: "590",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};
	const handleClick = (movie) => {
    console.log("**")
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(movie?.original_name || movie?.title || "up")
				.then((url) => {
          console.log(url)
					const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams)
					setTrailerUrl(urlParams.get("v"));
				})
				.catch((error) => console.log(error));
		}
	};
	return (
		<div className="row">
			<h1>{title}</h1>

			<div className="row__posters">
				{movies.map((movie) => (
  			<img
						key={movie.id}
						onClick={() => handleClick(movie)}
						className={`row__poster ${isLargeRow} && "row__posterLarge"`}
						src={`${base_url}original${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
					/>
				))}
			</div>

			<div className="row__youtube">
				{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
			</div>
		</div>
	);
}

export default Row;

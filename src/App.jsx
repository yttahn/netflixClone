import React from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./utils/requests";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {

const API_KEY = import.meta.env.VITE_API_KEY;
  console.log(API_KEY)
	return (
		<div className="App">
			<Nav />
			<Banner />
			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow = "i"
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row
				title="Documentaries Movies"
				fetchUrl={requests.fetchDocumentaries}
			/>
			<Footer />
		</div>
	);
}

export default App;

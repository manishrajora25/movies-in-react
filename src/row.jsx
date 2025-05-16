import React, { useEffect, useState } from "react";


function row({ urls, heading, btn1, btn2 }) {
  const [movieData, setMovieData] = useState([]); 
  const [selectedUrl, setSelectedUrl] = useState(urls[0]); 
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

 
  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(selectedUrl);
        const result = await response.json();
        setMovieData(result.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();  
  }, [selectedUrl]); 

  return (
    <section className="p-4">
      <header className="mb-4">
        <h2 >{heading}</h2>
        <div >
          <button
            onClick={() => setSelectedUrl(urls[0])}
            
          >
            {btn1}
          </button>
          <button
            onClick={() => setSelectedUrl(urls[1])}>
            {btn2}
          </button>
        </div>
      </header>

      {/* Movie Grid */}
      <div className="movieWrapper">
  {movieData.length > 0 ? (
    movieData.map((movie) => (
      <div key={movie.id} className="movieBOx">
        {movie.poster_path && (
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title || movie.name}
           className="nameimg"
          />
        )}
      </div>
    ))
  ) : (
    <p >No data available</p>
  )}
</div>

    </section>
  );
}

export default row;








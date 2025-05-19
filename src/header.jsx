// import React, { useEffect, useState } from "react";
// import { IoSearchOutline } from "react-icons/io5";

// function Header() {
//   const [movieData, setMovieData] = useState([]);
//   const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

//   const shows = {
//     "upcoming movies": "https://api.themoviedb.org/3/movie/upcoming?api_key=YOUR_API_KEY&language=en-US&page=1"
//   };

//   useEffect(() => {
//     async function fetchMovies() {
//       try {
//         const response = await fetch(shows["upcoming movies"]);
//         const result = await response.json();
//         setMovieData(result.results || []);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     }

//     fetchMovies();
//   }, []);

//   // Select a random movie from the fetched data
//   const randomMovie =
//     movieData.length > 0
//       ? movieData[Math.floor(Math.random() * movieData.length)]
//       : null;

//   const backgroundImage = randomMovie?.poster_path
//     ? `${IMAGE_BASE_URL}${randomMovie.poster_path}`
//     : "";

//   return (
//     <>
//       {/* Header Section */}
//       <div className="header_mani flex justify-between items-center p-4 bg-gray-900 text-white">
//         <div className="logo">
//           <img
//             src="https://moviex-olive.vercel.app/assets/movix-logo-d720c325.svg"
//             alt="Logo"
//           />
//         </div>
//         <div className="tvsearch flex items-center space-x-4">
//           <li><a href="" className="hover:text-blue-500">Movies</a></li>
//           <li><a href="" className="hover:text-blue-500">TV Shows</a></li>
//           <span className="cursor-pointer hover:text-blue-500"><IoSearchOutline /></span>
//         </div>
//       </div>

//       {/* Background Section */}
//       <div
//         className="h-screen w-full bg-cover bg-center text-white flex items-center justify-center"
//         style={{
//           backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
//           backgroundColor: !backgroundImage ? "#1a1a1a" : "transparent",
//         }}
//       >
//         <div className="text-center p-4 bg-black bg-opacity-50 rounded-lg">
//           <h1 className="text-4xl font-bold mb-4">Upcoming Movies</h1>
//           {randomMovie ? (
//             <p className="text-xl">
//               Featured: <strong>{randomMovie.title || randomMovie.name}</strong>
//             </p>
//           ) : (
//             <p>Loading upcoming movies...</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Header;










import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

function Header() {
  const [movieData, setMovieData] = useState([]);
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

  const shows = {
    "upcoming movies": "https://api.themoviedb.org/3/movie/upcoming?api_key=3fb4c3ddfc88192745a5708f0de70cba&language=en-US&page=1"
  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(shows["upcoming movies"]);
        const result = await response.json();
        console.log(result.results); // Debugging: Log the API response
        setMovieData(result.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, []);

  const randomMovie =
    movieData.length > 0
      ? movieData[Math.floor(Math.random() * movieData.length)]
      : null;

  const backgroundImage = randomMovie?.poster_path
    ? `${IMAGE_BASE_URL}${randomMovie.poster_path}`
    : "https://via.placeholder.com/1920x1080?text=No+Image+Available";

  return (
    <>
      {/* Header Section */}
      <div className="hederbaar">
      <div className="header_mani">
        <div className="logo">
          <img
            src="https://moviex-olive.vercel.app/assets/movix-logo-d720c325.svg"
            alt="Logo"
          />
        </div>
        <ul className="tvsearch flex items-center space-x-4">
          <li><a href="" >Movies</a></li>
          <li><a href="">TV Shows</a></li>
          <span className="cursor"><IoSearchOutline /></span>
        </ul>
      </div>
      </div>

      {/* Background Section */}
      <div
        className="h-screen w-full bg-cover bg-center text-white flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height:"100vh"
        }}
      >
        <div className="text_center">
          <h1>Welcome.</h1>
          <p>Millions of movies, TV shows and people to discover. Explore now.</p>
          <div>
            <input type="text" 
            placeholder="Search for a movie or tv show..."/>
            <button>Search </button>
          </div>
          
          {/* {randomMovie ? (
            <>
              <p className="text-xl">
                Featured: <strong>{randomMovie.title || randomMovie.name}</strong>
              </p>
              <p className="text-md italic">
                Release Date: {new Date(randomMovie.release_date).toLocaleDateString()}
              </p>
            </>
          ) : (
            <p>Loading upcoming movies...</p>
          )} */}
        </div>
      </div>
    </>
  );
}

export default Header;

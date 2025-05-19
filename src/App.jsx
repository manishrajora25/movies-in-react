// import React from "react";
// import Row from "./row";
// import { urls } from "./script"; 
// import "./App.css";
// function App() {
//   return (
//     <>


//        <Row
//         heading="Upcomming movies"
//         btn1="Day"
//         btn2="Week"
//         urls={[urls.Upcomming, urls.Upcomming]}
//       />
    
//       <Row
//         heading="Trending Movies"
//         btn1="Day"
//         btn2="Week"
//         urls={[urls.trendingByDay, urls.trendingByWeek]}
//       />
//       <Row
//         heading="Popular Movies"
//         btn1="Movies"
//         btn2="TV Shows"
//         urls={[urls.popularMovies, urls.popularTVShows]}
//       />
//       <Row
//         heading="Top Rated Movies"
//         btn1="Movies"
//         btn2="TV Shows"
//         urls={[urls.topRatedMovies, urls.topRatedTVShows]}
//       />
//     </>
//   );
// }

// export default App;










import React from "react";
import Header from "./header"; // Import the Header component
import Row from "./row"; // Import the Row component
import { urls } from "./script"; // Assuming `urls` is exported from script.js
import "./App.css";

function App() {
  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Rows Section */}
      {/* <div className="rows-container"> */}
       
        <Row
          heading="Trending Movies"
          btn1="Day"
          btn2="Week"
          urls={[urls.trendingByDay, urls.trendingByWeek]}
        />
        <Row
          heading="Popular Movies"
          btn1="Movies"
          btn2="TV Shows"
          urls={[urls.popularMovies, urls.popularTVShows]}
        />
        <Row
          heading="Top Rated Movies"
          btn1="Movies"
          btn2="TV Shows"
          urls={[urls.topRatedMovies, urls.topRatedTVShows]}
        />
      {/* </div> */}
    </>
  );
}

export default App;

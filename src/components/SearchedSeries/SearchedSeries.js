import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../VideoCard/VideoCard";

export default function SearchedSeries() {
  // Add Sort by Rating
  const [series, setSeries] = useState([]);
  const params = useParams();
  useEffect(() => {
    console.log(params.search);
    axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=c313f39acfc9f5e7de7b99b22cc90878&query=${params.search}&include_adult=true`
      )
      .then((data) => setSeries(data.data.results));
  }, [params.search]);
  return (
    <>
      <div
        style={{
          color: "#fff",
        }}
        className="home"
      >
        {series.length < 1 ? (
          <>NO RESULTS FOUND</>
        ) : (
          series.map((video) => (
            <VideoCard inFavourites={false} series={video} />
          ))
        )}
      </div>
    </>
  );
}

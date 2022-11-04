import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./VideoPage.css";

export default function VideoPage() {
  const params = useParams();
  const [series, setSeries] = useState({});

  useEffect(() => {
    axios
      .get(
        `
    https://api.themoviedb.org/3/tv/${params.id}?api_key=c313f39acfc9f5e7de7b99b22cc90878&language=en-US`
      )
      .then((data) => {
        setSeries((series) => data.data);
      });
  }, [params.id]);
  return (
    <div className="series-info-wrapper">
      <div className="series-info">
        <h1 className="series-title">{series.name}</h1>
        <p className="series-description">{series.overview}</p>
        <div className="genres">
          <span>Genres: </span>
          {series.genres?.map((genre) => (
            <span className="text-muted" key={genre.id}>
              {genre.name}
            </span>
          ))}
          <div style={{ marginTop: "20px" }}>
            <a target="blank" className="home-link" href={series.homepage}>
              Home Page
            </a>
          </div>
        </div>
      </div>
      <div className="series-img">
        <img
          src={`https://image.tmdb.org/t/p/original/${series.poster_path}`}
          alt={"img"}
          id="series-img"
        />
      </div>
    </div>
  );
}

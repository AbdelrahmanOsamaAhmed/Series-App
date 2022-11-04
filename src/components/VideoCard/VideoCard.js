import React, { useEffect, useState } from "react";
import "./VideoCard.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function VideoCard({ series, inFavourites }) {
  // Disable Add to Favourites button
  const [isFavourite, setIsFavourite] = useState(false);
  const favourites = useSelector((state) => state.favourites);

  const [overview, setOverview] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    for (const fav of favourites) {
      if (fav.id === series.id) {
        setIsFavourite(true);
        break;
      }
    }
  }, [isFavourite, favourites, series]);

  if (series.overview === "") {
    series.overview = "NO OVERVIEW AVAILABLE";
  }

  return (
    <>
      <div className="card">
        <div className="video-pic">
          <Link to={`/video/${series.id}`} className="link">
            <img
              id="video-img"
              src={`https://image.tmdb.org/t/p/original/${series.poster_path}`}
              alt={"img"}
            />
          </Link>
        </div>
        <div className="info row">
          <div className="channel-pic col-2">
            <img
              id="channel-img"
              src={`https://image.tmdb.org/t/p/original/${series.poster_path}`}
              alt={"img"}
            />
          </div>
          <div
            className="description col d-flex"
            style={{ flexDirection: "column" }}
          >
            <Link to={`/video/${series.id}`} className="link">
              <p className="title ">{series.name}</p>
            </Link>

            {overview && (
              <p className="small-txt text-muted" style={{ marginTop: "10px" }}>
                {series.overview} <br />
              </p>
            )}
            <p className="small-txt">Rating: {series.vote_average} /10</p>
            <p className="small-txt">Date: {series.first_air_date} </p>
          </div>
        </div>
        <Button
          variant="outline-danger"
          style={{ marginBottom: "10px" }}
          onClick={() => setOverview((overview) => !overview)}
        >
          Details
        </Button>
        {!inFavourites && (
          <Button
            variant="outline-danger"
            style={{ marginBottom: "50px" }}
            onClick={() => {
              if (isFavourite) {
                dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: series });
                setIsFavourite(false);
              } else {
                dispatch({ type: "ADD_TO_FAVOURITES", payload: series });
                setIsFavourite(true);
              }
            }}
          >
            {!isFavourite
              ? "Add to your favourites"
              : "Remove from your favourites"}
          </Button>
        )}

        {inFavourites && (
          <Button
            variant="outline-danger"
            style={{ marginBottom: "50px" }}
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: series })
            }
          >
            Remove From Favourites
          </Button>
        )}
      </div>
    </>
  );
}

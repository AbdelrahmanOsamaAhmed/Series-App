import React, { useEffect, useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./Home.css";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  //const [page, setPage] = useState(1);
  const [videos, setVideos] = useState([]);
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=c313f39acfc9f5e7de7b99b22cc90878&language=en-US&page=${page}`
      )
      .then((data) => setVideos((videos) => data.data.results));
  }, [page]);

  return (
    <div >
      <div
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "20px",
          fontSize: "2rem",
        }}
      >
        Page {useSelector((state) => state.page)}
      </div>

      <div
        style={{
          color: "#fff",
        }}
        className="home"
      >
        {videos.map((video) => (
          <VideoCard key={video.id} series={video} inFavourites={false} />
        ))}
      </div>
      <div
        className="container d-flex justify-content-around"
        style={{ marginBottom: "50px" }}
      >
        <Button
          variant="outline-danger"
          onClick={() => {
            dispatch({ type: "PREVIOUS" });
          }}
        >
          Previous
        </Button>
        <Button
          variant="outline-danger"
          onClick={() => {
            dispatch({ type: "NEXT" });
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

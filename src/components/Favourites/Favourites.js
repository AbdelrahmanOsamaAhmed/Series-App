import React, {  useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import VideoCard from "../VideoCard/VideoCard";
import Alert from "react-bootstrap/Alert";

export default function Favourites() {
  // Search in Favourites
  let series = useSelector((state) => state.favourites);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [alertTxt,setAlertTxt] = useState('');

  function handle(txt) {
    setAlertTxt(txt);
    setShow(true);
    setTimeout(() => setShow(false), 3000);
  }
  return (
    <>
      {show && (
        <Alert style={{textAlign:'center' , fontSize:'20px'}} key="danger" variant="danger" >
          Sorted by {alertTxt}
        </Alert>
      )}
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "40px" }}
      >
        <Button
          variant="danger"
          onClick={() => {
            dispatch({ type: "SORT_BY_NAME" });
            handle('Name');
          }}
          style={{ marginRight: "50px" }}
        >
          Sort by name
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            dispatch({ type: "SORT_BY_RATING" });
            handle('Rating');
          }}
        >
          Sort by rating
        </Button>
      </div>
      <div
        style={{
          color: "#fff",
        }}
        className="home"
      >
        {series.length < 1 ? (
          <>EMPTY FAVOURITES</>
        ) : (
          series.map((video) => (
            <VideoCard key={video.id} inFavourites={true} series={video} />
          ))
        )}
      </div>
    </>
  );
}

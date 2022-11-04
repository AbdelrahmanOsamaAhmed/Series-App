import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import "./App.css";
import VideoPage from "./components/VideoPage/VideoPage";
import SearchedSeries from "./components/SearchedSeries/SearchedSeries";
import Favourites from "./components/Favourites/Favourites";
function App() {
  return (
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/video/:id" exact element={<VideoPage />} />
          <Route path="/search/:search" exact element={<SearchedSeries />} />
          <Route path="/favourites" exact element={<Favourites />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

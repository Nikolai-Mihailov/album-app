import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";


import AlbumsComponent from './components/pages/AlbumsComponent';
import GalleryComponent from './components/pages/GalleryComponent';
import HeaderComponent from "./components/UI/Header";
import FavouritesComponent from "./components/pages/FavouritesComponent";
// import FooterComponent from "./components/UI/Footer";

function App() {

  const location = useLocation();

  //  TO DO 
  //  Have to think for a better way to keep track on location!
  //  When the location is different from "/"" e.g "/gallery/:id"
  //  gallery state should be returned to the initial state.

  useEffect(() => {

    console.log(location.pathname)

  }, [location]);

  return (
    <div>
      <header>
        <HeaderComponent />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<AlbumsComponent />} />
          <Route path="/gallery/:id" element={<GalleryComponent />} />
          <Route path="/favourites" element={<FavouritesComponent />} />
        </Routes>
      </main>
      {/* <footer>
        <FooterComponent />
      </footer> */}
    </div>

  );
}

export default App;

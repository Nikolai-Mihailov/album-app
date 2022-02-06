import { Route, Routes } from "react-router-dom";

import AlbumsComponent from './components/pages/AlbumsComponent';
import GalleryComponent from './components/pages/GalleryComponent';
import HeaderComponent from "./components/UI/Header";
import FavouritesComponent from "./components/pages/FavouritesComponent";

function App() {
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
    </div>
  );
}

export default App;

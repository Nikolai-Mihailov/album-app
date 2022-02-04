import { Route, Routes } from "react-router-dom";

import AlbumsComponent from './components/pages/AlbumsComponent';
import GalleryComponent from './components/pages/GalleryComponent';

function App() {

  return (
    <Routes>
      <Route path="/" element={<AlbumsComponent />} />
      <Route path="/gallery" element={<GalleryComponent />} />
    </Routes>
  );
}

export default App;

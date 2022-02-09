import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SpinnerComponent from "./components/UI/Spinner";

const HeaderComponent = React.lazy(() => import('./components/UI/Header'));
const AlbumsComponent = React.lazy(() => import('./components/pages/AlbumsComponent'));
const GalleryComponent = React.lazy(() => import('./components/pages/GalleryComponent'));
const FavouritesComponent = React.lazy(() => import('./components/pages/FavouritesComponent'));
const NotFoundComponent = React.lazy(() => import('./components/pages/NotFoundComponent'));

function App() {
  return (
    <Suspense fallback={SpinnerComponent}>
      <header>
        <HeaderComponent />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<AlbumsComponent />} />
          <Route path="/gallery/:id" element={<GalleryComponent />} />
          <Route path="/favourites" element={<FavouritesComponent />} />
          <Route path="*" element={<NotFoundComponent />} />
        </Routes>
      </main>
    </Suspense>
  );
}

export default App;

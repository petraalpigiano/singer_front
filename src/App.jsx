import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AlbumsListPage from "./pages/albums/AlbumsListPage";
import DefaultLayout from "./layouts/DefaultLayout";
import NotFoundPage from "./pages/NotFoundPage";
import AlbumDetailsPage from "./pages/albums/AlbumDetailsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ROTTE CON IN COMUNE IL LAYOUT */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>

          {/* ROTTE CON IN COMUNE IL PREFISSO  */}
          <Route path="/albums">
            <Route path="" element={<AlbumsListPage />}></Route>
            <Route path=":id" element={<AlbumDetailsPage />}></Route>
          </Route>

          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

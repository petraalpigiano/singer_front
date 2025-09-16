import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AlbumDetailsPage() {
  const { id } = useParams();
  const [APIAlbum, setAPIAlbum] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/albums/" + id).then((response) => {
      const specificAlbum = response.data.data;
      setAPIAlbum(specificAlbum);
    });
  }, []);
  console.log(APIAlbum);

  return (
    <>
      <div className="container text-center my-4">
        {APIAlbum.image != null && (
          <img
            src={`/${APIAlbum.image}`}
            className="card-img-top img-custom2 mb-2"
            alt={APIAlbum.name}
          />
        )}
        <h3>{APIAlbum.name}</h3>
        <p>{APIAlbum.published_year}</p>
        <p>Songs : {APIAlbum.n_songs}</p>
        {APIAlbum.genre != null && <p>Genere: {APIAlbum.genre.name}</p>}
      </div>
    </>
  );
}

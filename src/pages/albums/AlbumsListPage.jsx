import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/Card";

export default function AlbumListPage() {
  const [APIAlbums, setAPIAlbums] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/albums").then((response) => {
      const albums = response.data.data;
      //   console.log(albums);
      setAPIAlbums(albums);
    });
  }, []);
  // console.log(APIAlbums);

  return (
    <>
      <div className="container">
        <h3 className="text-center mt-4">Albums</h3>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4 my-1">
          {APIAlbums.map(function (currentAlbum) {
            return <Card currentAlbum={currentAlbum} key={currentAlbum.id} />;
          })}
        </div>
      </div>
    </>
  );
}

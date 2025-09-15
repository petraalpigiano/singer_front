import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AlbumListPage() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/albums").then((response) => {
      const albums = response.data.data;
      //   console.log(albums);
      setAPIData(albums);
    });
  }, []);
  console.log(APIData);

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4 my-1">
          {APIData.map(function (currentAlbum) {
            return (
              <div className="col" key={currentAlbum.id}>
                <Link
                  to={`/albums/${currentAlbum.id}`}
                  className="card h-100 link"
                >
                  <img
                    src={`src/assets/${currentAlbum.image}`}
                    className="card-img-top"
                    alt={currentAlbum.name}
                  />
                  <div className="card-body text-center ">
                    <h5 className="card-title ">{currentAlbum.name}</h5>
                    <p className="card-text">{currentAlbum.published_year}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

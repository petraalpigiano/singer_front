import { Link } from "react-router-dom";

export default function Card({ currentAlbum }) {
  return (
    <>
      <div className="col" key={currentAlbum.id}>
        <Link to={`/albums/${currentAlbum.id}`} className="card h-100 link">
          {currentAlbum.image != null && (
            <img
              src={`/${currentAlbum.image}`}
              className="card-img-top"
              alt={currentAlbum.name}
            />
          )}

          <div className="card-body text-center ">
            <h5 className="card-title ">{currentAlbum.name}</h5>
            <p className="card-text">{currentAlbum.published_year}</p>
          </div>
        </Link>
      </div>
    </>
  );
}

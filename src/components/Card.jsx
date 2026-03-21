import React from "react";
import { Link } from "react-router-dom";
import charactersImg from "../assets/img/characters.jpg";

export const Card = ({ item, type }) => {

  const getImageUrl = () => {
    let category = "";

    if (type === "characters") category = "people";
    if (type === "planets") category = "planets";
    if (type === "vehicles") category = "vehicles";

    return `https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/${category}/${item.uid}.jpg`;
  };


  return (
    <div
      className="card bg-light text-white m-2 card-body d-flex flex-column justify-content-between"
      style={{ maxWidth: "300px", border: "3px solid #e5a709" }}
    >
      <img
        src={getImageUrl()}
        className="card-img-top"
        alt={item.name}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/300x250?text=No+Image";
        }}
        style={{
          height: "250px",
          objectFit: "cover",
          objectPosition: "top",
        }}
      />

      <div className="card-body">
        <h5 className="card-title" style={{ color: "#e50914" }}>
          {item.name}
        </h5>

        <p className="card-text text-start" style={{ color: "black" }}>
          {type === "characters" && (
            <>
              Gender: {item.gender} <br />
              Hair color: {item.hair_color} <br />
              Eye color: {item.eye_color}
            </>
          )}

          {type === "vehicles" && (
            <>
              Model: {item.model} <br />
              Vehicle class: {item.vehicle_class} <br />
              Manufacturer: {item.manufacturer}
            </>
          )}

          {type === "planets" && (
            <>
              Climate: {item.climate} <br />
              Terrain: {item.terrain} <br />
              Population: {item.population}
            </>
          )}
        </p>

        <hr />

        <Link to={`/detail/${type}/${item.uid}`} className="btn btn-danger">
          Find out more
        </Link>
      </div>
    </div>
  );
};
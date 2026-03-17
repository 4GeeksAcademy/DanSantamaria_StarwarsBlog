import React from "react";
import { Link } from "react-router-dom";
import characters from "../assets/img/characters.jpg";

export const Card = ({ name, gender, hair, eyes, uid, type }) => {

    return (
        <div className="card bg-light text-white m-2" style={{ width: "25rem", border: '2px solid #e5a709' }}>
            
            <img 
                src={characters} 
                className="card-img-top" 
                alt={name}
                style={{ height: "250px", objectFit: "cover", objectPosition: "top" }}
            />

            <div className="card-body">

                <h5 className="card-title" style={{ color: '#e50914' }}>
                    {name}
                </h5>

                <p className="card-text text-start" style={{ height: "50px", color: "black" }}>
                    Gender: {gender} <br />
                    Hair color: {hair} <br />
                    Eye color: {eyes}
                </p>

                <hr />

                <Link 
                    to={`/detail/${type}/${uid}`} 
                    className="btn btn-danger"
                >
                    Find out more
                </Link>

            </div>
        </div>
    );
};
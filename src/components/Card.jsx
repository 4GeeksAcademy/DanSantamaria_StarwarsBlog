import React from "react";
import { Link } from "react-router-dom";
import characters from "../assets/img/characters.jpg";

export const Card = () => {
    
    return (
        <div className="card bg-light text-white m-2" style={{width: "25rem", border: '2px solid #e5a709'}}>
            <img src={characters} className="card-img-top" alt="" style={{height:"250px", objectFit:"cover", objectPosition:"top"}}/>
                <div className="card-body">
                    <h5 className="card-title" style={{color: '#e50914'}}>Luke Skywalkwer</h5>
                    <p className="card-text text-start" style={{height:"50px", color:"black"}}>
                        Gender: male <br />
                        Hair color: blonde <br />
                        Eye color: green
                    </p>
                    <hr className=""/>
                    <a href="#" className="btn btn-danger">Find out more</a>
                </div>
            
        </div>
    );
};
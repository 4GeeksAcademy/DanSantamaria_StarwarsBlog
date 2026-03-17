import React from "react";
import { useParams, Link } from "react-router-dom";

export const Detail = () => {

    const { category, uid } = useParams();

    // URL de imagen usando starwars visual guide
    const imageUrl = `https://starwars-visualguide.com/assets/img/${category}/${uid}.jpg`;

    return (
        <div className="container mt-5 text-light">

            <div className="row">

                {/* Image */}
                <div className="col-md-4">
                    <img 
                        src={imageUrl} 
                        className="img-fluid rounded"
                        alt="Star Wars element"
                    />
                </div>

                {/* Info */}
                <div className="col-md-8 d-flex flex-column justify-content-center">

                    <h1 className="mb-3 text-warning">
                        {category} #{uid}
                    </h1>

                    <p>
                        This is a basic detail page for the selected element.
                        Later you will fetch the information from the SWAPI API
                        and display the real data here.
                    </p>

                    <p>
                        Category: <strong>{category}</strong>
                    </p>

                    <p>
                        UID: <strong>{uid}</strong>
                    </p>

                    <Link to="/" className="btn btn-warning mt-3">
                        Back Home
                    </Link>

                </div>

            </div>

            <hr className="border-warning opacity-100 my-5"/>

            {/* Extra info section (for later API data) */}
            <div className="row text-center">

                <div className="col">
                    <p>Property 1</p>
                </div>

                <div className="col">
                    <p>Property 2</p>
                </div>

                <div className="col">
                    <p>Property 3</p>
                </div>

                <div className="col">
                    <p>Property 4</p>
                </div>

                <div className="col">
                    <p>Property 5</p>
                </div>

            </div>

        </div>
    );
};
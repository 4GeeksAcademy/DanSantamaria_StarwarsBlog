import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const Detail = () => {

    const { type, uid } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {

        let endpoint = "";

        if (type === "characters") endpoint = "people";
        if (type === "planets") endpoint = "planets";
        if (type === "vehicles") endpoint = "vehicles";

        fetch(`https://www.swapi.tech/api/${endpoint}/${uid}`)
            .then(res => res.json())
            .then(data => {
                setData(data.result.properties);
            });

    }, [type, uid]);

    if (!data) {
        return <h1 className="text-white text-center">Loading...</h1>;
    }

    return (
        <div className="container text-white mt-5 col-md-6">

            <h1 className="text-center mb-4 text-warning">{data.name}</h1>
            <hr className="border-warning opacity-100 my-5" />

            <div className="row">

                <div className="col-md-5 me-4">
                    <img
                        src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/${type === "characters" ? "people" : type}/${uid}.jpg`}
                        className="img-fluid rounded shadow "
                        alt={data.name}
                    />
                </div>

                {/* Info */}
                <div className="col-md-4">

                    <h4 className="text-warning fw-bold mb-2">
                        {type === "characters" && "Character Profile"}
                        {type === "planets" && "Planetary Data"}
                        {type === "vehicles" && "Technical Specifications"}
                    </h4>

                    {type === "characters" && (
                        <h5 className="text-white">
                            Records from the Jedi Archives indicate that {data.name} is an individual
                            known across the galaxy. Standing at {data.height} cm, with {data.hair_color} hair
                            and {data.eye_color} eyes, this {data.gender} figure has played a role in shaping
                            key events throughout galactic history.
                        </h5>
                    )}

                    {type === "planets" && (


                        <h5 className="text-white">
                            Galactic surveys describe {data.name} as a world characterized by a {data.climate}
                            climate and {data.terrain} terrain. With a population of {data.population},
                            this planet has contributed to the development and expansion of civilizations
                            across the galaxy.
                        </h5>
                    )}

                    {type === "vehicles" && (
                        <h5 className="text-white">
                            Engineering logs reveal that the {data.name} is a vehicle manufactured by
                            {data.manufacturer}. Designed to transport up to {data.passengers} passengers
                            with a crew of {data.crew}, it can reach speeds of {data.max_atmosphering_speed},
                            making it a key asset in both civilian and military operations.
                        </h5>
                    )}

                    <Link to="/" className="btn btn-outline-warning mt-3">
                        ← Back Home
                    </Link>

                </div>
            </div>

            <hr className="border-warning opacity-100 my-4" />

            {/* Dynamic info section */}
            <div className="row text-center g-4">

                {type === "characters" && (
                    <>
                        <Info label="Gender" value={data.gender} />
                        <Info label="Height" value={data.height} />
                        <Info label="Hair" value={data.hair_color} />
                        <Info label="Eyes" value={data.eye_color} />
                        <Info label="Birth Year" value={data.birth_year} />
                    </>
                )}

                {type === "planets" && (
                    <>
                        <Info label="Climate" value={data.climate} />
                        <Info label="Terrain" value={data.terrain} />
                        <Info label="Population" value={data.population} />
                        <Info label="Gravity" value={data.gravity} />
                        <Info label="Diameter" value={data.diameter} />
                    </>
                )}

                {type === "vehicles" && (
                    <>
                        <Info label="Model" value={data.model} />
                        <Info label="Manufacturer" value={data.manufacturer} />
                        <Info label="Passengers" value={data.passengers} />
                        <Info label="Speed" value={data.max_atmosphering_speed} />
                        <Info label="Crew" value={data.crew} />
                    </>
                )}

            </div>
        </div>
    );
};

const Info = ({ label, value }) => {
    return (
        <div className="col-6 col-md-2 ">
            <div className="p-3 border border-warning rounded h-100 bg-dark">
                <p className="text-warning mb-1 fw-bold">{label}</p>
                <p className="mb-0">{value || "unknown"}</p>
            </div>
        </div>
    );
};
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
        <div className="container text-white mt-5 col-md-7">

            <h1 className="text-center mb-4 text-warning">{data.name}</h1>
            <hr className="border-warning opacity-100 my-5"/>

            <div className="row">

                <div className="col-md-4 me-5">
                    <img
                        src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/${type === "characters" ? "people" : type}/${uid}.jpg`}
                        className="img-fluid rounded shadow "
                        alt={data.name}
                    />
                </div>

                <div className="col-md-7 details rounded">

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
            <hr className="border-warning opacity-100 my-2"/>
            <Link to="/" className="btn btn-outline-warning m-4">
                ← Back Home
            </Link>
        </div>
    );
};

const Info = ({ label, value }) => {
    return (
        <div className="col-md-12">
            <div className="">
                <p className="text-warning mb-1 fw-bold">{label}</p>
                <p className="mb-0">{value || "unknown"}</p>
            </div>
        </div>
    );
};
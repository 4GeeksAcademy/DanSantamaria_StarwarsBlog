import galaxy from "../assets/img/galaxy.png";
import characters from "../assets/img/characters.jpg";
import vehicles from "../assets/img/vehicles.jpg";
import planets from "../assets/img/planets.jpg";

import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<div className=" text-start ms-5" style={{ marginTop: "100px" }}>
				<p>
					<img src={galaxy} style={{ width: "600px" }} />
				</p>
				<div className="d-flex justify-content-around" style={{ width: "600px", marginBottom: "350px" }}>
					<Link to="/characters">
						<button className="btn btn-outline-light ms-2 me-3 galaxy_button">
							CHARACTERS
						</button>
					</Link>
					<button className="btn btn-outline-light ms-2 me-3 galaxy_button">
						VEHICLES
					</button>
					<button className="btn btn-outline-light ms-2 me-3 galaxy_button">
						PLANETS
					</button>
				</div>

				<div className="d-flex justify-content-around">

					<div className="d-flex flex-column me-5">
						<img src={characters} alt="" className="image mb-4" />
						<button className="btn btn-outline-light ms-2  view_more_button">
							VIEW MORE
						</button>
					</div>

					<div className="d-flex flex-column me-5">
						<img src={vehicles} alt="" className="image mb-4" />
						<button className="btn btn-outline-light ms-2  view_more_button">
							VIEW MORE
						</button>
					</div>

					<div className="d-flex flex-column mb-5">
						<img src={planets} alt="" className="image mb-4" />
						<button className="btn btn-outline-light ms-2 view_more_button">
							VIEW MORE
						</button>

					</div>
				</div>
			</div>
		</div>
	);
}; 
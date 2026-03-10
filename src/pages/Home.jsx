import galaxy from "../assets/img/galaxy.png";
import characters from "../assets/img/characters.jpg";

import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<div className=" text-start ms-5" style={{ marginTop: "100px" }}>
				<p>
					<img src={galaxy} style={{ width: "600px" }} />
				</p>
				<div className="d-flex justify-content-between" style={{ width: "600px", marginBottom: "350px"}}>
					<button className="btn btn-outline-light ms-2 me-3">
						CHARACTERS
					</button>
					<button className="btn btn-outline-light ms-2 me-3">
						VEHICLES
					</button>
					<button className="btn btn-outline-light ms-2 me-3">
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
						<img src={characters} alt="" className="image mb-4" />
						<button className="btn btn-outline-light ms-2  view_more_button">
							VIEW MORE
						</button>
					</div>

					<div className="d-flex flex-column">
						<img src={characters} alt="" className="image mb-4" />
						<button className="btn btn-outline-light ms-2 view_more_button">
							VIEW MORE
						</button>

					</div>
				</div>
			</div>
		</div>
	);
}; 
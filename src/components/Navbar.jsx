import { Link } from "react-router-dom";
import logo from "../assets/img/Logo.png";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark  p-3 ">
				<div className="container-fluid">

					<Link to="/" className="navbar-brand ms-3">
						<img src={logo} alt="" style={{ width: "90px" }} />
					</Link>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse text-center" id="navbarNav">
						<ul className="navbar-nav ms-auto">

							<Link to="/">
								<li className="nav-item">
									<a className="nav-link" href="#">HOME</a>
								</li>
							</Link>

							<Link to="/characters">
								<li className="nav-item">
									<a className="nav-link" href="#">CHARACTERS</a>
								</li>
							</Link>

							<Link to="/vehicles">
								<li className="nav-item">
									<a className="nav-link" href="#">VEHICLES</a>
								</li>
							</Link>

							<Link to="/planets">
								<li className="nav-item">
									<a className="nav-link" href="#">PLANETS</a>
								</li>
							</Link>

							<div className="dropdown">
								<button
									className="btn btn-warning dropdown-toggle ms-3"
									data-bs-toggle="dropdown"
								>
									Favorites ({store.favorites.length})
								</button>

								<ul className="dropdown-menu dropdown-menu-end">

									{store.favorites.length === 0 && (
										<li className="dropdown-item text-muted">
											No favorites yet
										</li>
									)}

									{store.favorites.map((fav, index) => (
										<li
											key={index}
											className="dropdown-item d-flex justify-content-between align-items-center"
										>
											<Link className="fav-link" to={`/detail/${fav.type}/${fav.uid}`}>
												{fav.name}
											</Link>

											<span
												style={{ cursor: "pointer" }}
												onClick={() =>
													dispatch({
														type: "remove_favorite",
														payload: fav
													})
												}
											>
												❌
											</span>
										</li>
									))}

								</ul>
							</div>

						</ul>

					</div>
				</div>
			</nav>

		</div>
	);
};
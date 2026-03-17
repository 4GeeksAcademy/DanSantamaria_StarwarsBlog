import { Link } from "react-router-dom";
import logo from "../assets/img/Logo.png";

export const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark  p-2 ">
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

							<li className="nav-item dropdown">

								<button
									className="btn btn-warning dropdown-toggle ms-2 me-3"
									data-bs-toggle="dropdown"
								>
									Favorites <span className="badge bg-dark">3</span>
								</button>

								<ul className="dropdown-menu dropdown-menu-end">

									<li className="dropdown-item d-flex justify-content-between">
										Luke Skywalker
										<span>❌</span>
									</li>

									<li className="dropdown-item d-flex justify-content-between">
										Tatooine
										<span>❌</span>
									</li>

								</ul>

							</li>

						</ul>

					</div>
				</div>
			</nav>

		</div>
	);
};
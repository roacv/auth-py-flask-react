import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/private">
						<button className="btn btn-primary">Privado</button>
					</Link>
					<Link className="ms-2" to="/login">
						<button className="btn btn-primary">Log in</button>
					</Link>					
				</div>
			</div>
		</nav>
	);
};

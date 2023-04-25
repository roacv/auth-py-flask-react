import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");    
    const navigate = useNavigate();

    console.log("This is your token", store.token);
    const handleClick = (option) => {
		if(option=="login"){
			actions.login(email, password)
		}else{
			actions.logout();
			console.log("token logout", store.token);
		}
    }

	return (
		<div className="container">
					{store.token && store.token != "" && store.token != undefined ? (
						<div>
						<h2>Cerrar sesión</h2>
						<Link className="ms-2" to="/login">
						<button onClick={() => handleClick('logout')} className="btn btn-primary">Cerrar sesión</button>
						</Link>
						</div>
					) : (	
						<div>	
						<input type="text" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
						<input type="password" value={password} placeholder="password"onChange={(e) => setPassword(e.target.value)}/>
						<button onClick={() => handleClick('login')}>Login</button>
						</div>
					)}
		</div>
	);
};

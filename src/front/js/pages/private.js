import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const Private = () => {
    const { store, actions } = useContext(Context);   
    const navigate = useNavigate();

    console.log("This is your token", store.token);
	console.log("el if");
	console.log((store.token && store.token != "" && store.token != undefined));
	// useEffect(() => {
	// 	if (store.token && store.token != "" && store.token != undefined) navigate.push("/login");	
	// 	     });	

	
    const handleClick = () => {
        actions.login(email, password)
    }
		return (
			<div className="text-center mt-5">
				<h1>Página privada</h1>
				{store.token && store.token != "" && store.token != undefined ? (
					<div>
					<h2>esta es la info privada</h2>
					"You are logged in with this token " + {store.token}
					</div>
				) : (
					<div>
					<h2>No tiene permiso</h2>
					<Link className="ms-2" to="/login">
					<button className="btn btn-primary">Continuar</button>
					</Link>
					</div>
		)}
			</div>
		);
};

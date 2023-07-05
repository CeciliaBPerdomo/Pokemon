import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Cards from "./cards.jsx"

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [pokemons, setPokemons] = useState([{}])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
			const data = await response.json()
			setPokemons(data.results)
		}
		fetchData()
	}, []);


	return (
		<div className="container" style={{marginTop: "20px"}}>

			<div className="d-flex justify-content-center" style={{marginBottom: "30px"}}>
				<img src="https://www.pngall.com/wp-content/uploads/13/Pokemon-Logo-PNG-Pic.png"
				style={{width: "250px"}}/>	
			</div>


			<div className="card-group d-flex justify-content-center">
				{pokemons.map((item, id) => (
					<div className="card-group" style={{marginBottom: "10px", marginRight: "10px"}}>
						<Cards key={id} name={item.name} id={id} />	
					</div>
				))}
			</div>
		</div>
	)
};

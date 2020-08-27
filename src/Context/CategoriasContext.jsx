import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
// Crear context
export const CategoriasContext = createContext();

// Provider donde se encuetran las funciones y state

const CategoriasProvider = (props) => {
	// creacion del state para el context
	const [categorias, setCategorias] = useState([]);

	// ejecutar el llamado a la api
	useEffect(() => {
		const obtenerCategorias = async () => {
			const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
			const categorias = await axios.get(url);
			setCategorias(categorias.data.drinks);
		};
		obtenerCategorias();
	}, []);
	return (
		<CategoriasContext.Provider
			value={{
				categorias,
			}}
		>
			{props.children}
		</CategoriasContext.Provider>
	);
};

export default CategoriasProvider;

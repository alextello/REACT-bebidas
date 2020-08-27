import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
	const [receta, setReceta] = useState([]);
	const [busquedaReceta, setBusquedaReceta] = useState({
		nombre: '',
		categoria: '',
	});
	const [consultar, setConsultar] = useState(false);

	const { nombre, categoria } = busquedaReceta;

	useEffect(() => {
		if (consultar) {
			const obtenerRecetas = async () => {
				const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
				const resultado = await axios.get(url);
				setReceta(resultado.data.drinks);
			};
			obtenerRecetas();
		}
	}, [busquedaReceta, categoria, consultar, nombre]);
	return (
		<RecetasContext.Provider value={{ setBusquedaReceta, setConsultar }}>
			{props.children}
		</RecetasContext.Provider>
	);
};

export default RecetasProvider;

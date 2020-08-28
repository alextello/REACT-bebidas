import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

// crear el context
export const ModalContext = createContext();

const ModalProvider = (props) => {
	// state del provider
	const [idReceta, setIdReceta] = useState(null);
	const [infoReceta, setReceta] = useState({});

	// una vez haya una receta, llamar la API
	useEffect(() => {
		const obtenerReceta = async () => {
			if (!idReceta) return;
			const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
			const resultado = await axios.get(url);
			setReceta(resultado.data.drinks[0]);
		};
		obtenerReceta();
	}, [idReceta]);
	return (
		<ModalContext.Provider
			value={{
				infoReceta,
				setIdReceta,
				setReceta,
			}}
		>
			{props.children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;

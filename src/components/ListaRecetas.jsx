import React, { useContext } from 'react';
import { RecetasContext } from '../Context/RecetasContext';
import Receta from './Receta';
import PropTypes from 'prop-types';

const ListaRecetas = (props) => {
	// extraer recetas
	const { receta } = useContext(RecetasContext);
	return (
		<div className="row mt-5">
			{receta.map((rec) => (
				<Receta key={rec.idDrink} receta={rec} />
			))}
		</div>
	);
};

ListaRecetas.propTypes = {};

export default ListaRecetas;

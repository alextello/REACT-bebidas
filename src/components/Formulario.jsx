import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../Context/CategoriasContext';
import { RecetasContext } from '../Context/RecetasContext';

const Formulario = () => {
	const [busqueda, setBusqueda] = useState({
		nombre: '',
		categoria: '',
	});

	const { categorias } = useContext(CategoriasContext);
	const { setBusquedaReceta } = useContext(RecetasContext);

	// funcion para leer contenido
	const obtenerDatosReceta = (e) => {
		setBusqueda({
			...busqueda,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<form
			className="col-12"
			onSubmit={(e) => {
				e.preventDefault();
				setBusquedaReceta(busqueda);
			}}
		>
			<fieldset className="text-center mb-2">
				<legend className="text-primary">Busca bebidas por categoría o ingrediente</legend>
			</fieldset>

			<div className="row">
				<div className="col-md-4">
					<input
						name="nombre"
						className="form-control"
						type="text"
						placeholder="Buscar por ingrediente"
						onChange={obtenerDatosReceta}
					/>
				</div>
				<div className="col-md-4">
					<select className="form-control" name="categoria" onChange={obtenerDatosReceta}>
						<option value="">-- Seleciona categoria</option>
						{categorias.map((cat, i) => (
							<option key={i} value={cat.strCategory}>
								{cat.strCategory}
							</option>
						))}
					</select>
				</div>
				<div className="col-md-4">
					<input
						type="submit"
						className="btn btn-block btn-primary"
						value="Buscar bebida"
					/>
				</div>
			</div>
		</form>
	);
};

export default Formulario;

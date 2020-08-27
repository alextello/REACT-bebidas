import React, { useContext } from 'react';
import { CategoriasContext } from '../Context/CategoriasContext';

const Formulario = (props) => {
	const { categorias } = useContext(CategoriasContext);
	console.log(categorias);
	return (
		<form className="col-12">
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
					/>
				</div>
				<div className="col-md-4">
					<select className="form-control" name="categoria">
						<option value="">-- Seleciona categoria</option>
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

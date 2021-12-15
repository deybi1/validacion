import React, {useState} from 'react';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './componentes/input';

const App = () => {
	const [nombre, cambiarNombre] = useState({nombre: '', valido: null});
	const [apellido, cambiarApellido] = useState({apellido: '', valido: null});
	const [identidad, cambiarIdentidad] = useState({identidad: '', valido: null});
	const [fechanac, cambiarFechanac] = useState({fechanac: '', valido: null});
	const [telefono, cambiarTelefono] = useState({telefono: '', valido: null});
	const [correo, cambiarCorreo] = useState({correo: '', valido: null});
	const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [password2, cambiarPassword2] = useState({campo: '', valido: null});	
	const [terminos, cambiarTerminos] = useState(false);
	const [formularioValido, cambiarFormularioValido] = useState(null);

	const state = {
		
		nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, 
		apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
		identidad: /^\d{13,13}$/,
		fechanac: /^\d{8,8}$/ , 
		password: /^.{4,12}$/, 
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{8,8}$/ 
	}

	const validarPassword2 = () => {
		if(password.campo.length > 0){
			if(password.campo !== password2.campo){
				cambiarPassword2((prevState) => {
					return {...prevState, valido: 'false'}
				});
			} else {
				cambiarPassword2((prevState) => {
					return {...prevState, valido: 'true'}
				});
			}
		}
	}

	const onChangeTerminos = (e) => {
		cambiarTerminos(e.target.checked);
	}

	const onSubmit = (e) => {
		e.preventDefault();

		if(
			
			nombre.valido === 'true' &&
			apellido.valido === 'true' &&
			identidad.valido === 'true' &&
			fechanac.valido === 'true' &&
			password.valido === 'true' &&
			password2.valido === 'true' &&
			correo.valido === 'true' &&
			telefono.valido === 'true' &&
			terminos
		){
			cambiarFormularioValido(true);
			
			cambiarNombre({nombre: '', valido: null});
			cambiarApellido({apellido: '', valido: null});
			cambiarIdentidad({identidad: '', valido: null});
			cambiarFechanac({fechanac: '', valido: null});
			cambiarPassword({campo: '', valido: null});
			cambiarPassword2({campo: '', valido: 'null'});
			cambiarCorreo({correo: '', valido: null});
			cambiarTelefono({telefono: '', valido: null});

			// ... 
		} else {
			cambiarFormularioValido(false);
		}
		console.log(nombre)
		console.log(apellido)
		console.log(identidad)
		console.log(fechanac)
		console.log(correo)
		console.log(telefono)
	}

	return (
		<main>
			<Formulario action="" onSubmit={onSubmit}>
				
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					type="text"
					label="Nombre(ejemplo: Deiby Benigno)"
					placeholder="solamente se aceptan letras y espacios"
					name="usuario"
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={state.nombre}
				/>

<Input
					estado={apellido}
					cambiarEstado={cambiarApellido}
					type="text"
					label="Apellido(Lopez)"
					placeholder="solamente se aceptan letras y espacios"
					name="apellido"
					leyendaError="El apellido solo puede contener letras y espacios."
					expresionRegular={state.apellido}
				/>

<Input
					estado={identidad}
					cambiarEstado={cambiarIdentidad}
					type="text"
					label="Identidad(ejemplo:1803199900853)"
					placeholder="13 digitos minimo y maximo"
					name="identidad"
					leyendaError="La identidad solo puede contener 13 numeros."
					expresionRegular={state.identidad}
				/>

<Input
					estado={fechanac}
					cambiarEstado={cambiarFechanac}
					type="text"
					label="Fecha de Nacimiento(ejemplo:01021997)"
					placeholder="8 digitos minimo y maximo"
					name="fechanac"
					leyendaError="La fecha de nacimiento solo puede contener 8 digitos."
					expresionRegular={state.fechanac}
				/>

<Input
					estado={telefono}
					cambiarEstado={cambiarTelefono}
					type="text"
					label="Teléfono(ejemplo: 96123456)"
					placeholder="9 digitos maximo y minimo"
					name="telefono"
					leyendaError="El telefono solo puede contener 8 numeros."
					expresionRegular={state.telefono}
				/>

<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					type="email"
					label="Correo Electrónico(ejemplo:deybi.benigno@gmail.com)"
					placeholder="deybi123@unah.hn"
					name="correo"
					leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
					expresionRegular={state.correo}
				/>
				<Input
					estado={password}
					cambiarEstado={cambiarPassword}
					type="password"
					label="Contraseña(valor maximo 4 y minimo 12 incluyendo letras,numeros y simbolos)"
					name="password1"
					leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
					expresionRegular={state.password}
				/>
				<Input
					estado={password2}
					cambiarEstado={cambiarPassword2}
					type="password"
					label="Repetir Contraseña"
					name="password2"
					leyendaError="Ambas contraseñas deben ser iguales."
					funcion={validarPassword2}
				/>
		
			



				<ContenedorTerminos>
					<Label>
						<input 
							type="checkbox"
							name="terminos"
							id="terminos"
							checked={terminos} 
							onChange={onChangeTerminos}
						/>
						Acepto los Terminos y Condiciones
					</Label>
				</ContenedorTerminos>
				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}
				<ContenedorBotonCentrado>
					<Boton type="submit">Enviar</Boton>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
				</ContenedorBotonCentrado>
			</Formulario>
		</main>
	);
}
 
export default App;
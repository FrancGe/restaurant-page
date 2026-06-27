import {html, render} from "lit-html";
import "./css/contacto.css";


export function cargarContacto() {
    const contenedorContacto = document.createElement("div");
    contenedorContacto.classList.add("contenedor-contacto");

    const tituloContacto = document.createElement("h2");
    tituloContacto.classList.add("titulo-contacto");
    tituloContacto.textContent = "Contáctenos";
    contenedorContacto.append(tituloContacto);

    const contenedorFormulario = document.createElement("div");
    contenedorFormulario.classList.add("contenedor-formulario");
    contenedorContacto.append(contenedorFormulario);

    const formulario = () => 
    html`<form>
        <label for="nombre">Nombre</label>
        <input id="nombre" type="text" placeholder="John...">

        <label for="apellido">Apellido</label>
        <input id="apellido" type="text" placeholder="Doe...">

        <label for="telefono">Telefono</label>
        <input id="telefono" type="tel" placeholder="3322556677">

        <label for="email">Email</label>
        <input id="email" type="email" placeholder="johndoe@correo.com">

        <textarea placeholder="Su mensaje..."></textarea>

        <input class="boton-enviar" type="submit" value="Enviar">

    </form>`
    render(formulario(), contenedorFormulario);

    return contenedorContacto;
}
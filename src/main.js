import "./style.css";
import { cargarInicio } from "./inicio";

const paginaInicio = cargarInicio();

const contenedorPrincipal = document.querySelector("#contenedor");
const botonInicio = document.querySelector(".boton-inicio");
const botonMenu = document.querySelector(".boton-menu");
const botonContacto = document.querySelector(".boton-contacto");

function actualizarVentanaActiva() {
    botonInicio.classList.remove("activo")
    botonMenu.classList.remove("activo")
    botonContacto.classList.remove("activo")

    botonActivo.classList.add("activo");
}

function inicializarPagina() {
    contenedorPrincipal.appendChild(paginaInicio);
    botonInicio.classList.add("activo");
}

// Eventos para los clics en el navegador
botonInicio.addEventListener("click", () => {
    contenedorPrincipal.textContent = "";
    contenedorPrincipal.appendChild(cargarInicio());
    actualizarVentanaActiva(botonInicio);
});

inicializarPagina();



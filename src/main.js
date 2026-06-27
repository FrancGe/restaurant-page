import "./css/style.css";
import { cargarInicio } from "./inicio";
import { cargarMenu } from "./menu";
import { cargarContacto } from "./contacto";

const paginaInicio = cargarInicio();
const paginaMenu = cargarMenu();
const paginaContacto = cargarContacto();

const contenedorPrincipal = document.querySelector("#contenedor");
const botonInicio = document.querySelector(".boton-inicio");
const botonMenu = document.querySelector(".boton-menu");
const botonContacto = document.querySelector(".boton-contacto");

function actualizarVentanaActiva(botonActivo) {
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
    contenedorPrincipal.append(cargarInicio());
    actualizarVentanaActiva(botonInicio);
});

botonMenu.addEventListener("click", () => {
    contenedorPrincipal.textContent = "";
    contenedorPrincipal.append(cargarMenu());
    actualizarVentanaActiva(botonMenu);
});

botonContacto.addEventListener("click", ()=> {
    contenedorPrincipal.textContent = "";
    contenedorPrincipal.append(cargarContacto());
    actualizarVentanaActiva(botonContacto);
})

inicializarPagina();



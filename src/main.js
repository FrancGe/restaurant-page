import "./style.css";
import { cargarInicio } from "./inicio";

const contenedorPrincipal = document.querySelector("#contenedor");
const paginaInicio = cargarInicio();

contenedorPrincipal.appendChild(paginaInicio);
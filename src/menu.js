import "./css/menu.css";
import carne from "./assets/carnes.webp";
import ensalada from "./assets/ensaladas.webp";
import pizza from "./assets/pizzas.webp";
import hamburguesa from "./assets/hamburguesas.webp";
import marisco from "./assets/mariscos.webp";
import trago from "./assets/tragos.webp";

const platos = [
    {
        titulo: "Carnes",
        descripcion: "Diversos cortes a eleccion y con la preparacion que mas guste",
        imagen: carne
    },
    {
        titulo: "Acompañamientos",
        descripcion: "Contamos con diferentes tipos de acompañamientos, desde los mas simples hasta las ensaladas mas gourmet",
        imagen: ensalada
    },
    {
        titulo: "Pizzas",
        descripcion: "Diversos tipos de pizzas, pidalas por porcion, completas o combinadas",
        imagen: pizza
    },
    {
        titulo: "Hamburguesas",
        descripcion: "Hamburguesas gourmet, un plato simple pero con la reversion gourmet nuestra",
        imagen: hamburguesa
    },
    {
        titulo: "Mariscos",
        descripcion: "Contamos con distintos tipos de mariscos y peces de mar completamente frescos",
        imagen: marisco
    },
    {
        titulo: "Tragos",
        descripcion: "Tenemos para ofrecerle una variedad enorme de tragos para acompañar de la mejo manera sus comidas, con y sin alcohol",
        imagen: trago
    }
];

function crearTarjetaPlato(imagen, titulo, descripcion) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-menu");

    tarjeta.insertAdjacentHTML("afterbegin", `
    <img src="${imagen}" alt="${titulo}" class="imagen-menu">
    <div class="tarjeta-info">
    <h3 class="titulo-menu">${titulo}</h3>
    <p class="descripcion-menu">${descripcion}</p>
    <button class="boton-menu">Ordenar</button>
    </div>`);

    return tarjeta;
}

export function cargarMenu() {
    const contenedorMenu = document.createElement("div");
    contenedorMenu.classList.add("contenedor-menu");

    const tituloSeccion = document.createElement("h2");
    tituloSeccion.textContent = "Lo que tenemos para ofrecerle";
    tituloSeccion.classList.add("titulo-seccion");
    contenedorMenu.append(tituloSeccion);

    const contenedorPlatos = document.createElement("div");
    contenedorPlatos.classList.add("contenedor-platos");
    
    platos.forEach(plato => {
        const nuevaTarjeta = crearTarjetaPlato(plato.imagen, plato.titulo, plato.descripcion);

        contenedorPlatos.append(nuevaTarjeta);
    });

    contenedorMenu.append(contenedorPlatos);

    return contenedorMenu;
}
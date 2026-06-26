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
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo nulla vitae nulla semper pulvinar. Suspendisse varius fringilla fermentum. Pellentesque tincidunt libero ipsum, vel iaculis sapien vehicula et. Vivamus lacus ante, consectetur at quam ac, varius elementum odio. Proin vel leo eu odio feugiat placerat sed ut nisl. Duis non nibh bibendum, euismod lorem sed, fringilla dui. Aliquam dictum, orci sed rutrum ornare, justo nunc maximus nibh, vel semper leo tellus at enim. Aenean volutpat odio nulla, ut pulvinar metus porta ac. Duis iaculis odio neque, a maximus leo egestas ut.",
        imagen: carne
    },
    {
        titulo: "Acompañamientos",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo nulla vitae nulla semper pulvinar. Suspendisse varius fringilla fermentum. Pellentesque tincidunt libero ipsum, vel iaculis sapien vehicula et. Vivamus lacus ante, consectetur at quam ac, varius elementum odio. Proin vel leo eu odio feugiat placerat sed ut nisl. Duis non nibh bibendum, euismod lorem sed, fringilla dui. Aliquam dictum, orci sed rutrum ornare, justo nunc maximus nibh, vel semper leo tellus at enim. Aenean volutpat odio nulla, ut pulvinar metus porta ac. Duis iaculis odio neque, a maximus leo egestas ut.",
        imagen: ensalada
    },
    {
        titulo: "Pizzas",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo nulla vitae nulla semper pulvinar. Suspendisse varius fringilla fermentum. Pellentesque tincidunt libero ipsum, vel iaculis sapien vehicula et. Vivamus lacus ante, consectetur at quam ac, varius elementum odio. Proin vel leo eu odio feugiat placerat sed ut nisl. Duis non nibh bibendum, euismod lorem sed, fringilla dui. Aliquam dictum, orci sed rutrum ornare, justo nunc maximus nibh, vel semper leo tellus at enim. Aenean volutpat odio nulla, ut pulvinar metus porta ac. Duis iaculis odio neque, a maximus leo egestas ut.",
        imagen: pizza
    },
    {
        titulo: "Hamburguesas",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo nulla vitae nulla semper pulvinar. Suspendisse varius fringilla fermentum. Pellentesque tincidunt libero ipsum, vel iaculis sapien vehicula et. Vivamus lacus ante, consectetur at quam ac, varius elementum odio. Proin vel leo eu odio feugiat placerat sed ut nisl. Duis non nibh bibendum, euismod lorem sed, fringilla dui. Aliquam dictum, orci sed rutrum ornare, justo nunc maximus nibh, vel semper leo tellus at enim. Aenean volutpat odio nulla, ut pulvinar metus porta ac. Duis iaculis odio neque, a maximus leo egestas ut.",
        imagen: hamburguesa
    },
    {
        titulo: "Mariscos",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo nulla vitae nulla semper pulvinar. Suspendisse varius fringilla fermentum. Pellentesque tincidunt libero ipsum, vel iaculis sapien vehicula et. Vivamus lacus ante, consectetur at quam ac, varius elementum odio. Proin vel leo eu odio feugiat placerat sed ut nisl. Duis non nibh bibendum, euismod lorem sed, fringilla dui. Aliquam dictum, orci sed rutrum ornare, justo nunc maximus nibh, vel semper leo tellus at enim. Aenean volutpat odio nulla, ut pulvinar metus porta ac. Duis iaculis odio neque, a maximus leo egestas ut.",
        imagen: marisco
    },
    {
        titulo: "Tragos",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo nulla vitae nulla semper pulvinar. Suspendisse varius fringilla fermentum. Pellentesque tincidunt libero ipsum, vel iaculis sapien vehicula et. Vivamus lacus ante, consectetur at quam ac, varius elementum odio. Proin vel leo eu odio feugiat placerat sed ut nisl. Duis non nibh bibendum, euismod lorem sed, fringilla dui. Aliquam dictum, orci sed rutrum ornare, justo nunc maximus nibh, vel semper leo tellus at enim. Aenean volutpat odio nulla, ut pulvinar metus porta ac. Duis iaculis odio neque, a maximus leo egestas ut.",
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
import iconoCh from "./assets/chef.svg";
import iconoAmb from "./assets/ambiente.svg";
import iconoServ from "./assets/servicio.svg";

export function cargarInicio() {
    const contenedorInicio = document.createElement("div");
    contenedorInicio.classList.add("contenedor-inicio");

    const contenedorFondo = document.createElement("div");
    contenedorFondo.classList.add("contenedor-fondo");


    const titulo = document.createElement("h1");
    titulo.classList.add("titulo-inicio");
    titulo.textContent = "Bienvenido!";

    const descripcion = document.createElement("p");
    descripcion.classList.add("descripcion-inicio");
    descripcion.textContent = "¡Sientase a gusto de recorrer todo lo que tenemos para ofrecerle!"

    const subtitulo = document.createElement("h3");
    subtitulo.classList.add("subtitulo-inicio");
    subtitulo.textContent = "Dejando el alma en cada plato para llevar a su mesa sabores que encierran la calida nostalgia del hogar!";

    const descripcionSecundaria = document.createElement("p");
    descripcionSecundaria.classList.add("descripcion-secundaria");
    descripcionSecundaria.textContent = "Mas que un lugar donde comer, buscamos ser un hogar y un refugio donde se encuentre reunido con sus personas mas queridas compartiendo platillos hecho con la mayor atención al detalle";

    
    // Contenedor global de Iconos
    const contenedorIconos = document.createElement("div");
    contenedorIconos.classList.add("contenedor-iconos");

    // Contenedor de icono y texto chef
    const contenedorIconoChef = document.createElement("div");
    contenedorIconoChef.classList.add("contenedor-icono-chef");
    const iconoChef = document.createElement("img");
    iconoChef.src = iconoCh;
    iconoChef.classList.add("icono-chef");

    const textoChef = document.createElement("p");
    textoChef.textContent = "Calidad en cada plato"
    contenedorIconoChef.appendChild(iconoChef);
    contenedorIconoChef.appendChild(textoChef);

    // Contenedor de icono y texto ambiente
    const contenedorIconoAmbiente = document.createElement("div");
    contenedorIconoAmbiente.classList.add("contenedor-icono-ambiente");

    const iconoAmbiente = document.createElement("img");
    iconoAmbiente.src = iconoAmb;
    iconoAmbiente.classList.add("icono-ambiente");
    const textoAmbiente = document.createElement("p");
    textoAmbiente.textContent = "Ambiente agradable y acojedor";
    contenedorIconoAmbiente.appendChild(iconoAmbiente);
    contenedorIconoAmbiente.appendChild(textoAmbiente);

    // Contenedor icono y texto servicio
    const contenedorIconoServicio = document.createElement("div");
    contenedorIconoServicio.classList.add("contenedor-icono-servicio");
    const iconoServicio = document.createElement("img");
    iconoServicio.src = iconoServ;
    iconoServicio.classList.add("icono-servicio");
    const textoServicio = document.createElement("p");
    textoServicio.textContent = "El mejor servicio";
    contenedorIconoServicio.appendChild(iconoServicio);
    contenedorIconoServicio.appendChild(textoServicio);


    // Apadrinadores globales
    contenedorFondo.appendChild(titulo);
    contenedorFondo.appendChild(descripcion);
    
    contenedorIconos.appendChild(contenedorIconoChef);
    contenedorIconos.appendChild(contenedorIconoAmbiente);
    contenedorIconos.appendChild(contenedorIconoServicio);

    contenedorInicio.appendChild(contenedorFondo);
    contenedorInicio.appendChild(subtitulo);
    contenedorInicio.appendChild(descripcionSecundaria);
    contenedorInicio.appendChild(contenedorIconos);
  
    return contenedorInicio;
}

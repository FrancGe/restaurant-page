import carne from "./assets/carnes.webp";

export function cargarMenu() {
    const contenedorMenu = document.createElement("div");
    contenedorMenu.classList.add("contenedor-menu");

    const tarjetaMenuCarnes = document.createElement("div");
    tarjetaMenuCarnes.classList.add("menu-carne");

    const imgCarne = document.createElement("img");
    imgCarne.classList.add("imagen-carne");
    imgCarne.src = carne;
    imgCarne.alt = "Imagen menu de carnes";
    tarjetaMenuCarnes.append(imgCarne);

    const tituloCarne = document.createElement("h3");
    tituloCarne.classList.add("titulo-carne");
    tituloCarne.textContent = "Carnes de especialidad";
    tarjetaMenuCarnes.append(tituloCarne);

    contenedorMenu.append(tarjetaMenuCarnes);

    return contenedorMenu;
}
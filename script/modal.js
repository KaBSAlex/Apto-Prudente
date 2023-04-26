const openModalPlanta = document.querySelector(".open-modal-planta");
const openModalTerraco = document.querySelector(".open-modal-terraco");

// fade, modal e fechar modal
const fadePlanta = document.querySelector("#fade-planta");
const fadeTerraco = document.querySelector("#fade-terraco");

const modalPlanta = document.querySelector(".modal");
const modalTerraco = document.querySelector(".modal-terraco")

const closeModalPlanta = document.querySelector(".close-modal-planta");
const closeModalTerraco = document.querySelector(".close-modal-terraco")
//abrir modal
const toggleModalPlanta = () =>  {
    modalPlanta.classList.toggle("hide")
    fadePlanta.classList.toggle("hide")
}

const toggleModalTerreo = () =>  {
    modalTerraco.classList.toggle("hide")
    fadeTerraco.classList.toggle("hide")
}

if(openModalPlanta) {
    [openModalPlanta, closeModalPlanta, fadePlanta].forEach((el) => {
        el.addEventListener("click", () => toggleModalPlanta());
    });
} 

if(openModalTerraco) {
    [openModalTerraco, closeModalTerraco, fadeTerraco].forEach((el2) => {
        el2.addEventListener("click", () => toggleModalTerreo());
    });
}

const openModalPlanta = document.querySelector(".open-modal-planta");

const closeModalBtn = document.querySelector(".close-modal");
const modal = document.querySelector("#modal-planta-padrao");
const fade = document.querySelector("#fade");

const toggleModal = () =>  {
    modal.classList.toggle("hide")
    fade.classList.toggle("hide")
}

[openModalPlanta, closeModalBtn, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});


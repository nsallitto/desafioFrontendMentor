const input = document.querySelector("#input");
const button = document.querySelector("#button");
const inicio = document.querySelector("#inicio");
const realizado = document.querySelector("#realizado");
const realizadoButton = document.querySelector("#realizadoButton");
const form = document.querySelector("#form");
const email = document.querySelector("#email");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    inicio.classList.add("disabled");
    realizado.classList.remove("disabled");
    email.textContent = input.value;
})

realizadoButton.addEventListener("click", () => {
    inicio.classList.remove("disabled");
    realizado.classList.add("disabled");
    form.reset();
})


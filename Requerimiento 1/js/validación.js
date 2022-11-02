window.onload = function () {
  submit.addEventListener("click", () => {
  const elementosObligatorios = document.querySelectorAll("[required]")
  for (let elemento of elementosObligatorios) {
    elemento.classList.add("validar");
  }
});
}
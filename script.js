const btnVerIdeias = document.querySelector("button.fat");
const footerLink = document.querySelector("#footer");

btnVerIdeias.addEventListener("click", function() {
  footerLink.classList.toggle("hide");
});

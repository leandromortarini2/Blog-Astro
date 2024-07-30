document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  // Verifica si los elementos existen antes de agregar el evento
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("expanded");
    });
  } else {
    console.error("Elemento(s) no encontrado(s) en el DOM");
    if (!hamburger)
      console.error("Elemento con clase .hamburger no encontrado");
    if (!navLinks) console.error("Elemento con clase .nav-links no encontrado");
  }
});

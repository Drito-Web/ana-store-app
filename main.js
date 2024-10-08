
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  const links = nav.querySelectorAll('a')
  console.log(links.forEach(a=> {
    a.style.color = 'white'
  }));
});

// Función para cerrar el menú si está abierto
function closeMenu() {
  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
  }
}

// Detectar si se hace scroll y cerrar el menú automáticamente
window.addEventListener('scroll', () => {
  closeMenu(); // Cierra el menú cuando el usuario hace scroll
});

// Detectar cambio de tamaño de la ventana
window.addEventListener('resize', () => {
  const windowWidth = window.innerWidth;

  // Si el tamaño es mayor a 768px (desktop), cerramos el menú si está abierto
  if (windowWidth > 768) {
    closeMenu();
  }
});
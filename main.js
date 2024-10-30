import Lenis from 'lenis';

const lenis = new Lenis({
  duration: 1.2,       // Configuración de la duración del desplazamiento
  easing: (t) => t,    // Función de suavizado
  smooth: true,        // Activa el desplazamiento suave
});

function animate(time) {
  lenis.raf(time);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

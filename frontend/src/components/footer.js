export const Footer = () => {
  const $footer = document.createElement("nav");
  $footer.classList.add("text-center, mt-5, border-top, pt-3");

  $footer.innerHTML = `
  <footer class="text-center mt-5 border-top pt-3">
    <p>&copy; 2024 LockDev. Todos los derechos reservados.</p>
  </footer>
  `;
  return $footer;
};

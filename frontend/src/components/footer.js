export const Footer = () => {
  const $footer = document.createElement("footer");
  $footer.classList.add("text-center", "mt-5", "border-top", "pt-3");

  $footer.innerHTML = `
    <p>&copy; 2024 LockDev. Todos los derechos reservados.</p>
  `;
  return $footer;
};

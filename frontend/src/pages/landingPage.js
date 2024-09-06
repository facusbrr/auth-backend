export const LandingPage = () => {
  const $container = document.createElement("div");

  $container.classList.add("container-fluid", "row");

  $container.innerHTML = `
      <h1>Bienvenido a Nuestra Landing Page</h1>
      <hr>
      <div class="col-md-12 text-center">
        <button id="login-button" class="btn btn-primary">Inicio de Sesión</button>
        <button id="register-button" class="btn btn-secondary">Registrarse</button>
      </div>
    `;

  $container.querySelector("#login-button").addEventListener("click", () => {
    window.location.href = "/login";
  });

  $container.querySelector("#register-button").addEventListener("click", () => {
    window.location.href = "/register";
  });

  return $container;
};

export const RegisterPage = () => {
  const $container = document.createElement("div");
  $container.classList.add("container");
  $container.innerHTML = `
          <div class="row justify-content-center mt-5">
              <div class="col-xs-12 col-md-12 col-sm-12 col-lg-12">
                  <div class="card shadow-sm">
                      <div class="card-body">
                          <h3 class="text-center mb-4">Registrarse</h3>
                          <form id="login-form">
                              <div class="form-floating mb-3">
                                  <input type="text" class="form-control" id="username" placeholder="Username" required>
                                  <label for="username">Usuario</label>
                              </div>
                              <div class="form-floating mb-3">
                                  <input type="password" class="form-control" id="password" placeholder="Password"
                                      required>
                                  <label for="password">Contraseña</label>
                              </div>
                              <button type="submit" class="btn btn-primary w-100">Registrarse</button>
                          </form>
                          <p id="message" class="text-danger mt-3"></p>
                      </div>
                  </div>
              </div>
          </div>

    `;

  // Agregar el contenedor al DOM
  document.body.appendChild($container);

  // Agregar el evento submit al formulario
  document
    .getElementById("login-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Validación básica
      if (!username || !password) {
        document.getElementById("message").innerText =
          "Por favor, completa todos los campos.";
        return;
      }

      if (username.trim() === "" || username.trim() === "") {
        document.getElementById("message").innerText =
          "Por favor, completa todos los campos.";
        return;
      }

      try {
        const response = await fetch("http://localhost:4000/register", {
          method: "POST",
          credentials: "include", // Importante para enviar las cookies de sesión
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
          const divError = document.getElementById("message");
          divError.innerText = "Credenciales inválidas";
          divError.classList.add(
            "bg-danger",
            "text-white",
            "text-center",
            "rounded",
            "p-2",
            "mt-3"
          );

          setTimeout(() => {
            divError.hidden = true;
          }, 3500);

          return;
        }

        const data = await response.json();
        console.log(data);
        window.location.href = "login";
      } catch (error) {
        console.error("Error:", error);
      }
    });

  return $container;
};

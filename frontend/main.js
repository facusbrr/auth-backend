import "./style.css";
import { Navbar } from "./src/components/navbar";
import { LoginPage } from "./src/pages/loginPage";
import { Home } from "./src/pages/homePage";
const pathname = window.location.pathname;

const $app = document.querySelector("#app");

if (pathname === "/home") {
  $app.appendChild(Navbar());
  $app.appendChild(Home());
  (async () => {
    const response = await fetch("http://localhost:4000/session", {
      method: "GET",
      credentials: "include", // Importante para enviar las cookies de sesión
    });

    console.log({ response });

    if (response.ok) {
      const data = await response.json();
      document.getElementById("user-name").innerText = data.user.username;
    } else {
      // Redirigir al usuario a la página de inicio de sesión
      window.location.href = "index.html";
    }
  })();

  // Manejar el cierre de sesión
  document.getElementById("logout").addEventListener("click", async () => {
    const response = await fetch("http://localhost:4000/logout", {
      method: "POST",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Error al cerrar sesión");
    } else {
      window.location.href = "login";
    }
  });
}
if (pathname === "/login") $app.appendChild(LoginPage());

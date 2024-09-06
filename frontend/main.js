import "./style.css";
import { Navbar } from "./src/components/navbar";
import { LoginPage } from "./src/pages/loginPage";
import { Home } from "./src/pages/homePage";
import { AboutPage } from "./src/pages/aboutPage";
import { BlogPage } from "./src/pages/blogPage";
import { Footer } from "./src/components/footer";
import { RegisterPage } from "./src/pages/registerPage";

const pathname = window.location.pathname;
const $app = document.querySelector("#app");

//Cuando haga la sessión va a solicitar al server su user
const handleSession = async () => {
  try {
    //Solicita al servidor la sesión del usuario
    const response = await fetch("http://localhost:4000/session", {
      method: "GET",
      credentials: "include", //Importante para enviar las cookies de sesión
    });

    //Si responde con ok la session se mantendra iniciada
    if (response.ok) {
      const data = await response.json();
      document.getElementById("user-name").innerText = data.user.username;
    }
  } catch (error) {
    window.location.href = "/home";
    console.error(`Ocurrio un error al mantener la sesión: ${error}`);
  }
};

//Cuando el usuario cierre sesión
const handleLogout = () => {
  document.getElementById("logout").addEventListener("click", async () => {
    try {
      //Solicita al servidor el logout del usuario
      const response = await fetch("http://localhost:4000/logout", {
        method: "POST",
        credentials: "include",
      });

      //Se redirige al usuario a la página inicial
      window.location.href = "/";
    } catch (error) {
      console.error(`Error al cerrar sesión: ${error}`);
      alert("Hubo un problema al cerrar sesión, intentalo denuevo");
    }
  });
};

if (pathname !== "/" && pathname !== "/register") {
  $app.appendChild(Navbar());
}

if (pathname === "/home") {
  $app.appendChild(Home());
}

if (pathname === "/") $app.appendChild(LoginPage());
if (pathname === "/about") {
  $app.appendChild(AboutPage());
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
if (pathname === "/blog") {
  $app.appendChild(BlogPage());
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

if (pathname === "/register") {
  $app.appendChild(RegisterPage());
}

if (pathname !== "/" && pathname !== "/register") {
  $app.appendChild(Footer());
}

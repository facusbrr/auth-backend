import { Navbar } from "./src/components/navbar";
import { LoginPage } from "./src/pages/loginPage";
import { Home } from "./src/pages/homePage";
import { AboutPage } from "./src/pages/aboutPage";
import { BlogPage } from "./src/pages/blogPage";
import { Footer } from "./src/components/footer";
import { RegisterPage } from "./src/pages/registerPage";
import { LandingPage } from "./src/pages/landingPage";

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
      window.location.href = "/landing";
    } catch (error) {
      console.error(`Error al cerrar sesión: ${error}`);
      alert("Hubo un problema al cerrar sesión, intentalo denuevo");
    }
  });
};

//Si la ubicación no es login ni register entonces aparecerá el navbar
if (pathname !== "/login" && pathname !== "/register" && pathname !== "/") {
  $app.appendChild(Navbar());
}

switch (pathname) {
  case "/login":
    $app.appendChild(LoginPage());
    break;
  case "/register":
    $app.appendChild(RegisterPage());
    break;
  case "/home":
    $app.appendChild(Home());
    handleSession();
    handleLogout();
    break;
  case "/about":
    $app.appendChild(AboutPage());
    handleSession();
    handleLogout();
    break;
  case "/blog":
    $app.appendChild(BlogPage());
    handleSession();
    handleLogout();
    break;
  case "/":
    $app.appendChild(LandingPage());
  default:
    break;
}

if (pathname !== "/login" && pathname !== "/register" && pathname !== "/") {
  $app.appendChild(Footer());
}

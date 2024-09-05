import "./style.css";
import { Navbar } from "./src/components/navbar";
import { LoginPage } from "./src/pages/loginPage";
import { Home } from "./src/pages/homePage";
const pathname = window.location.pathname;

const $app = document.querySelector("#app");

if (pathname === "/home") {
  $app.appendChild(Navbar());
  $app.appendChild(Home());
}
if (pathname === "/login") $app.appendChild(LoginPage());

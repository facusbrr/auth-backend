document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("http://localhost:4000/session", {
      method: "GET",
      credentials: "include", // Importante para enviar las cookies de sesión
    });
    if (response.ok) {
      const data = await response.json();
      document.getElementById("user-name").innerText = data.user.username;
    } else {
      // Redirigir al usuario a la página de inicio de sesión
      window.location.href = "login";
    }
    console.log({ response });
  } catch (error) {
    throw new Error(`Ocurrió un error en la sesión: ${error}`);
  }
});

// Manejar el cierre de sesión
const logoutButton = document.getElementById("logout");
if (logoutButton) {
  logoutButton.addEventListener("click", async () => {
    try {
      const response = await fetch("http://localhost:4000/logout", {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Error al cerrar sesión");
      } else {
        window.location.href = "login";
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  });
} else {
  console.error("Elemento con ID 'logout' no encontrado.");
}

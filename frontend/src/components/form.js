export function Form(type) {
  const actionUrl =
    type === "register"
      ? "http://localhost:4000/register"
      : "http://localhost:4000/login";
  const buttonText = type === "register" ? "Registrarse" : "Ingresar";

  const $form = document.createElement("form");
  $form.id = `${type}-form`;

  $form.innerHTML = `
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="username" placeholder="Username" required />
        <label for="username">Usuario</label>
      </div>
      <div class="form-floating mb-3">
        <input type="password" class="form-control" id="password" placeholder="Password" required />
        <label for="password">Contraseña</label>
      </div>
      <button type="submit" class="btn btn-primary w-100">${buttonText}</button>
      <p id="message" class="text-danger mt-3"></p>
    `;

  return $form;
}

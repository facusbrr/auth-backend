export const Navbar = () => {
  const $navbar = document.createElement("nav");
  $navbar.classList.add(
    "navbar",
    "navbar-expand-lg",
    "bg-body-tertiary",
    "mb-3"
  );

  $navbar.innerHTML = `
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="img/lockdev.webp" width="50" height="50" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="blog">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about">About</a>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" id="user-name" href="#">NotLogged</a>
            </li>
            <li class="nav-item">
              <a id="logout" class="nav-link" href="login">Salir</a>
            </li>
          </ul>
        </div>
      </div>
    `;

  return $navbar;
};

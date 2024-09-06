export const BlogPage = () => {
  const $container = document.createElement("div");

  $container.classList.add("container-fluid");

  $container.innerHTML = `
  <div class="container">
    <h1>Blog LockDev</h1>
    <hr>

    <!-- Sección de introducción -->
    <div class="mb-4">
      <p>En este blog, exploramos las últimas tendencias, técnicas y herramientas en el mundo del desarrollo de software.
         Desde consejos para principiantes hasta avanzadas técnicas de programación,
         aquí encontrarás recursos útiles para mejorar tus habilidades y mantenerte al día con la evolución de la industria.</p>
    </div>

    <!-- Sección de publicaciones recientes -->
    <h2>Publicaciones Recientes</h2>
    <div class="row">
      <div class="col-md-4">
        <div class="card mb-4">
          <img src="img/javascript.png" class="card-img-top img-card" alt="JavaScript">
          <div class="card-body">
            <h5 class="card-title">Introducción a JavaScript ES6</h5>
            <p class="card-text">Descubre las nuevas características de ES6 que están cambiando la forma en que escribimos JavaScript.</p>
            <a href="#" class="btn btn-primary">Leer más</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-4">
          <img src="img/docker.png" class="card-img-top img-card" alt="Docker">
          <div class="card-body">
            <h5 class="card-title">Docker para Desarrolladores</h5>
            <p class="card-text">Aprende cómo Docker puede simplificar la configuración de tu entorno de desarrollo.</p>
            <a href="#" class="btn btn-primary">Leer más</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-4">
          <img src="img/agile.png" class="card-img-top img-card" alt="Agile">
          <div class="card-body">
            <h5 class="card-title">Metodologías Ágiles en Desarrollo de Software</h5>
            <p class="card-text">Explora cómo las metodologías ágiles pueden mejorar la eficiencia y la colaboración en tu equipo de desarrollo.</p>
            <a href="#" class="btn btn-primary">Leer más</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Sección de categorías -->
    <h2>Categorías</h2>
    <ul class="list-group mb-4">
      <li class="list-group-item"><a href="#">JavaScript</a></li>
      <li class="list-group-item"><a href="#">Docker</a></li>
      <li class="list-group-item"><a href="#">Metodologías Ágiles</a></li>
      <li class="list-group-item"><a href="#">Desarrollo Web</a></li>
      <li class="list-group-item"><a href="#">Bases de Datos</a></li>
    </ul>
  </div>
  `;
  return $container;
};

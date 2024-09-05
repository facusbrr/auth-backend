export const Home = () => {
  const $container = document.createElement("div");

  $container.classList.add("container-fluid");

  $container.innerHTML = `
    <div class="container">
      <h1 class="text-center my-4">Bienvenidos a LockDev</h1>
      <p class="text-center">Transformamos tus ideas en soluciones digitales seguras y efectivas.</p>
      <hr>
    </div>

    <!-- Sección de servicios horizontales -->
    <div>
      <!-- Desarrollo Web -->
      <div class="row align-items-center bg-light py-4">
        <div class="col-md-6">
          <img src="img/home-desarrollo-web.webp" class="img-fluid" alt="Desarrollo Web">
        </div>
        <div class="col-md-6 text-center">
          <h2>Desarrollo Web</h2>
          <p>En LockDev, creamos sitios web modernos, rápidos y responsivos que se adaptan a todas las plataformas.
            Utilizamos las últimas tecnologías para ofrecer una experiencia de usuario única y eficiente.</p>
        </div>
      </div>
      <hr>
      <!-- Desarrollo de Aplicaciones Móviles -->
      <div class="row align-items-center py-4">
        <div class="col-md-6 order-md-2">
          <img src="img/home-desarrollo-movil.jpg" class="img-fluid" alt="Desarrollo de Aplicaciones Móviles">
        </div>
        <div class="col-md-6 text-center">
          <h2>Desarrollo de Aplicaciones Móviles</h2>
          <p>Diseñamos y desarrollamos aplicaciones móviles innovadoras y personalizadas para Android e iOS, garantizando
            una experiencia de usuario óptima y una alta performance en cada dispositivo.</p>
        </div>
      </div>
      <hr>
      <!-- Seguridad de Software -->
      <div class="row align-items-center bg-light py-4">
        <div class="col-md-6">
          <img src="img/home-seguridad-software.webp" class="img-fluid" alt="Seguridad de Software">
        </div>
        <div class="col-md-6 text-center">
          <h2>Seguridad de Software</h2>
          <p>En LockDev, nos preocupamos por la seguridad de tus aplicaciones. Ofrecemos auditorías de seguridad y
            soluciones robustas para proteger tus sistemas de posibles amenazas y vulnerabilidades.</p>
        </div>
      </div>
    </div>
  `;

  return $container;
};

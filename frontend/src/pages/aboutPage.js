export const AboutPage = () => {
  const $container = document.createElement("div");

  $container.classList.add("container-fluid", "row");

  $container.innerHTML = `
        <h1>Sobre Nosotros</h1>
        <hr>
          <div class="col-md-8">
            <p>Bienvenidos a <strong>LockDev</strong>, un espacio dedicado a todos los entusiastas del desarrollo de software, tanto principiantes como profesionales. Fundado en 2020 por un grupo de apasionados desarrolladores, nuestro objetivo es compartir conocimiento, experiencias y recursos que ayuden a otros a crecer en su carrera profesional.</p>
            <p>Nuestra misión es simplificar el aprendizaje del desarrollo de software proporcionando contenido de calidad, tutoriales prácticos y consejos útiles sobre las últimas tecnologías y mejores prácticas de la industria. Creemos en el poder de la comunidad y en la importancia de mantenerse actualizado en un campo tan dinámico y en constante evolución como es el desarrollo de software.</p>
            <p>En LockDev, cubrimos una amplia gama de temas, desde lenguajes de programación como JavaScript, Python y Java, hasta frameworks modernos, metodologías ágiles, y herramientas de DevOps como Docker y Kubernetes. Nos enfocamos en crear contenido accesible y fácil de entender, sin importar el nivel de experiencia de nuestros lectores.</p>
            <p>Únete a nuestra comunidad y participa en la conversación. Nos encantaría escuchar tus ideas, sugerencias y experiencias. Juntos, podemos construir un futuro mejor a través de la tecnología.</p>
          </div>
          <div class="col-md-4">
            <img src="img/lockdev.webp" class="img-fluid" alt="Equipo de LockDev">
          </div>
    `;
  return $container;
};

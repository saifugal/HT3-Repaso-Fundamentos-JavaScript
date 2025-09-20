document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('tablaForm');
  const resultadoDiv = document.getElementById('resultado');
  const videoContainer = document.getElementById('videoContainer');

  const videos = {
    1: "https://www.youtube.com/embed/gqi41glM494?si=O4VHA1eFFwPpjzlS",
    2: "https://www.youtube.com/embed/SPQcnDkNkeM?si=L-cl4tDVwsJNxKfB",
    3: "https://www.youtube.com/embed/jK7CnvR7j0k?si=XqF3NKuO2Gi8N7fO",
    4: "https://www.youtube.com/embed/Gfe6kzN0op8?si=X6LvBZ7dm247XFYa",
    5: "https://www.youtube.com/embed/VSCCY9Mjh-c?si=6JEVZ8EdaRbL7aL0",
    6: "https://www.youtube.com/embed/csQai1pBiv4?si=wRCS0gee_KJrORWe",
    7: "https://www.youtube.com/embed/tCUztDHhqHU?si=YOxFgk2yNWOY2DPW",
    8: "https://www.youtube.com/embed/4gOniFRg6Xk?si=0vA1DbPynJcjkhgO",
    9: "https://www.youtube.com/embed/muRcp3CNqAM?si=rkrdVgpDm9dxGYmo",
    10: "https://www.youtube.com/embed/jP7h7U5YQbU?si=ekiJeqT8L0mMsQVQ",
  };

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const numero = parseInt(document.getElementById('numero').value);
    resultadoDiv.innerHTML = '';
    videoContainer.innerHTML = '';

    if (numero < 1 || numero > 10 || isNaN(numero)) {
      resultadoDiv.innerHTML = `<p id="error">Debes ingresar un número entre 1 y 10.</p>`;
      return;
    }

    let suma = 0;
    let contenido = `<h2>Tabla del ${numero}</h2>`;
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      contenido += `<p>${numero} x ${i} = ${resultado}</p>`;
      suma += resultado;
    }
    contenido += `<p><strong>La suma total es: ${suma}</strong></p>`;
    resultadoDiv.innerHTML = contenido;

    const videoUrl = videos[numero];
    if(videoUrl) {
      videoContainer.innerHTML = `<iframe src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
    }
  });
});

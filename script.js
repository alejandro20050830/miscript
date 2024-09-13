  // Función para obtener los enlaces Adqva
    function obtenerEnlacesAdqva() {
      const elementosImagen = document.querySelectorAll("._AdQVA_ad_unit_image");
      const enlaces = [];

      elementosImagen.forEach(elemento => {
        const nodoHijo = elemento.querySelector("a[href*='https://servicer.adqva.com/click/']");
        if (nodoHijo) {
          enlaces.push(nodoHijo.href);
        }
      });

      return enlaces;
    }

    // Obtener los enlaces y actualizar el botón
    function actualizarEnlaceBoton() {
      const enlacesAdqva = obtenerEnlacesAdqva();
      const boton = document.getElementById("btn"); 

      if (enlacesAdqva.length > 0) {
        const enlaceAleatorio = enlacesAdqva[Math.floor(Math.random() * enlacesAdqva.length)];
        boton.href = enlaceAleatorio;
      } else {
        alert("No se encontraron enlaces válidos.");
      }
    }

    // Ejecutar la función cada 20 segundos
    setInterval(actualizarEnlaceBoton, 5000); 

    // Ejecutar la función al cargar la página
    actualizarEnlaceBoton(); // Llamada inicial para actualizar al cargar
  

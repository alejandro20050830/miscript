console.log("yes");
function obtenerEnlacesAdqva() {
  const allElementsWithClassA = [];
  const allElements = document.querySelectorAll("*"); // Selecciona todos los elementos de la página

  for (const element of allElements) {
    if (element.shadowRoot) {
      // Verifica si el elemento tiene un shadowRoot
      const elementsInsideShadowRoot = element.shadowRoot.querySelectorAll(
        "._AdQVA_ad_unit_image"
      );
      allElementsWithClassA.push(...elementsInsideShadowRoot); // Agrega los elementos encontrados a la lista
    }
  }

  const enlaces = [];

  allElementsWithClassA.forEach((elemento) => {
    const nodoHijo = elemento.querySelector("a");

    if (nodoHijo) {
      enlaces.push(nodoHijo.getAttribute("href"));
    }
  });

  return enlaces;
}

// Obtener los enlaces y actualizar el botón
function actualizarEnlaceBoton() {
  const enlacesAdqva = obtenerEnlacesAdqva();
  const boton = document.getElementById("btn");

  if (enlacesAdqva.length > 0) {
    const enlaceAleatorio =
      enlacesAdqva[Math.floor(Math.random() * enlacesAdqva.length)];
    boton.href = enlaceAleatorio;
  } else {
    console.log("No se encontraron enlaces válidos.");
  }
}

// Ejecutar la función cada 20 segundos
setInterval(actualizarEnlaceBoton, 5000);

actualizarEnlaceBoton();
  
